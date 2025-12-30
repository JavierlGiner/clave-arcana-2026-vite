import React, {
  useState,
  useEffect,
  createContext,
  useRef,
} from "react";
import isEqual from "lodash/isEqual";
import selectSound from "../assets/modena_select.mp3";
import swapSound from "../assets/moneda_change.mp3";

// Crea el contexto
const FichasContext = createContext();

//AGREGAR OPCIONES ID PARA BLOQUEAR UNA FICHA
const obtenerFichaBloqueable = (id, fichas) => {
  const fichasBloqueables = {
    0: [1, 2],
    1: [0, 3, 6],
    2: [0, 4],
    3: [1, 5, 6, 9],
    4: [2, 5],
    5: [3, 4, 9],
    6: [1, 3, 7],
    7: [6, 8],
    8: [7, 10],
    9: [3, 5, 10],
    10: [8, 9],
  };

  const indiceBloqueable = fichasBloqueables[id] || [];

  return indiceBloqueable.map((index) => {
    const ficha = fichas.find((f) => f.id === index);
    return {
      id: index,
      value: ficha ? ficha.value : null,
    };
  });
};

// Usando Fisher-Yates para mezclar las fichas
function shuffleArray(array) {
  let shuffledArray = [...array]; // Crea una copia del array para no modificar el original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Genera un índice aleatorio
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Intercambia los elementos
  }
  return shuffledArray;
}

const FichasProvider = ({ children }) => {
  const [fichas, setFichas] = useState([]);
  const [fichaBloqueada, setFichaBloqueada] = useState();
  const [enEspera, setEnEspera] = useState(false);
  const fichasRef = useRef(fichas);
  const fichasBloqueablesRef = useRef([]);

  const selectAudioRef = useRef(new Audio(selectSound));
  const swapAudioRef = useRef(new Audio(swapSound));

  const playSelectSound = () => {
    const audio = selectAudioRef.current;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  };

  const playSwapSound = () => {
    const audio = swapAudioRef.current;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  };
  //CREACION DE LAS FICHAS / PRIMER RENDERIZADO
  useEffect(() => {
    const initialFichas = Array.from({ length: 11 }, (_, index) => ({
      value: index,
      boolean: Math.random() < 0.5,
      isSelected: false,
      isLocked: false,
    }));

    console.log(initialFichas, "fichas con su value original");

    // Barajar las fichas
    const shuffledFichas = shuffleArray(initialFichas);

    // Asignar IDs a las fichas
    const fichasConID = shuffledFichas.map((ficha, index) => ({
      ...ficha,
      id: index,
    }));

    // Ahora calcular opciones bloqueables
    const fichasConOpcionesBloqueables = fichasConID.map((ficha) => ({
      ...ficha,
      opcionesBloqueables: obtenerFichaBloqueable(ficha.id, fichasConID),
    }));

    setFichas(fichasConOpcionesBloqueables);

    console.log(
      fichasConOpcionesBloqueables,
      "fichas con opciones bloqueables"
    );
  }, []);

  useEffect(() => {
    fichasRef.current = fichas;

    const fichasNuevaOpcionBloqueable = fichasRef.current.map((ficha) => ({
      ...ficha,
      opcionesBloqueables: obtenerFichaBloqueable(ficha.id, fichas),
    }));

    // Guardamos las nuevas opciones bloqueables en la referencia
    fichasBloqueablesRef.current = fichasNuevaOpcionBloqueable;
    fichasRef.current = fichas;
  }, [fichas]);

  //BLOQUEAR/DESBLOQUEAR UNA FICHA POR TIEMPO

  const desbloquearFicha = (fichaActual) => {
    // Actualizar el estado usando la referencia
    const fichasActuales = fichasRef.current.map((ficha) =>
      ficha.id === fichaActual.id ? { ...ficha, isLocked: false } : ficha
    );

    // Actualizar tanto la referencia como el estado
    setFichaBloqueada(null);
    setEnEspera(true);
    fichasRef.current = fichasActuales;
    setFichas(fichasActuales);
    setTimeout(() => {
      setEnEspera(false); // Desactivar la espera después de 20 segundos
    }, 15000);
  };

  const bloquearNuevaFicha = () => {
    const hayFichaSeleccionada = fichasRef.current.some(
      (ficha) => ficha.isSelected
    );

    if (hayFichaSeleccionada) {
      return;
    } else {
      const posiblesBloqueables = fichasBloqueablesRef.current.filter(
        (ficha) => {
          const condicion1 = ficha.opcionesBloqueables.every(
            (opcion) => opcion.id !== ficha.value
          );

          const condicion2 = !ficha.opcionesBloqueables.every(
            (opcion) => opcion.id === opcion.value
          );

          return condicion1 && condicion2;
        }
      );

      if (posiblesBloqueables.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * posiblesBloqueables.length
        );
        const fichaABloquear = posiblesBloqueables[randomIndex];

        const fichasActuales = fichasRef.current.map((ficha) =>
          ficha.id === fichaABloquear.id ? { ...ficha, isLocked: true } : ficha
        );
        fichasRef.current = fichasActuales;

        setFichaBloqueada(fichaABloquear);
        setFichas(fichasActuales);

        console.log(fichaABloquear, "FICHA BLOQUEADA");
      }
    }
  };

  // ** Bloqueo y Desbloqueo de Fichas **
  useEffect(() => {
    const fichasActuales = fichasBloqueablesRef.current;

    if (fichaBloqueada) {
      const actualizarOpciones = () => {
        const opcionesActualizadas = fichaBloqueada.opcionesBloqueables.map(
          (opcion) => {
            const fichaRelacionada = fichasActuales.find(
              (ficha) => ficha.id === opcion.id
            );
            return {
              ...opcion,
              value: fichaRelacionada?.value,
            };
          }
        );
        return opcionesActualizadas;
      };

      const nuevasOpciones = actualizarOpciones();
      const opcionesHanCambiado = !isEqual(
        nuevasOpciones,
        fichaBloqueada.opcionesBloqueables
      );

      if (opcionesHanCambiado) {
        setFichaBloqueada({
          ...fichaBloqueada,
          opcionesBloqueables: nuevasOpciones,
        });

        const coincidencias = nuevasOpciones.every(
          (opcion) => opcion.id === opcion.value
        );

        if (coincidencias) {
          desbloquearFicha(fichaBloqueada);
        }
      }
    } else if (!enEspera) {
      bloquearNuevaFicha();
    }
  }, [fichaBloqueada, fichas, enEspera]);

  //al seleccionar una FICHA
  const handleFichaClick = (ficha) => {
    if (!ficha.isLocked) {
      // Verifica si se puede intercambiar con una ficha especial
      const fichaEspecialIntercambiable = (ficha1, ficha2) => {
        const especialIntercambiable = obtenerEspecialIntercambiable(ficha1.id);
        return especialIntercambiable.includes(ficha2.id);
      };
      const obtenerEspecialIntercambiable = (id) => {
        const especialIntercambiable = {
          0: [1, 2, 3, 4, 6],
          1: [0, 2, 3, 5, 6, 7, 9],
          2: [0, 1, 4, 5],
          3: [0, 1, 4, 5, 6, 7, 9, 10],
          4: [0, 2, 3, 5, 9],
          5: [1, 2, 3, 4, 6, 9, 10],
          6: [0, 1, 3, 5, 7, 8, 9],
          7: [1, 3, 6, 8, 10],
          8: [6, 7, 9, 10],
          9: [1, 3, 4, 5, 6, 8, 10],
          10: [3, 5, 7, 8, 9],
        };
        return especialIntercambiable[id];
      };

      const obtenerFichasIntercambiables = (id) => {
        const intercambiables = {
          true: {
            0: [1, 2],
            1: [0, 3, 6],
            2: [0, 4],
            3: [1, 5, 6, 9],
            4: [2, 5],
            5: [3, 4, 9],
            6: [1, 3, 7],
            7: [6, 8],
            8: [7, 10],
            9: [3, 5, 10],
            10: [8, 9],
          },
          false: {
            0: [3, 4, 6],
            1: [2, 5, 7, 9],
            2: [1, 5],
            3: [0, 4, 7, 10],
            4: [0, 3, 9],
            5: [1, 2, 6, 10],
            6: [0, 5, 8, 9],
            7: [1, 3, 10],
            8: [6, 9],
            9: [1, 4, 6, 8],
            10: [3, 5, 7],
          },
        };

        return intercambiables[fichas[id].boolean][id];
      };

      // Verifica si se puede intercambiar con una ficha común
      const isIntercambiable = (ficha1, ficha2) => {
        const intercambiables = obtenerFichasIntercambiables(ficha1.id);
        return intercambiables.includes(ficha2.id);
      };

      // Lógica para manejar el intercambio de fichas o la selección/deselección
      const selectedFicha = fichas.find((f) => f.isSelected);

      if (!selectedFicha) {
        // Si no hay ninguna ficha seleccionada, seleccionamos la ficha actual
        setFichas((prevFichas) =>
          prevFichas.map((f) =>
            f.value === ficha.value ? { ...f, isSelected: true } : f
          )
        );
        playSelectSound();
      } else {
        // Si ya hay una ficha seleccionada
        if (
          selectedFicha.value !== ficha.value &&
          selectedFicha.boolean === ficha.boolean
        ) {
          // Si la ficha seleccionada y la clickeada son intercambiables

          // Fichas Especiales
          if (
            (selectedFicha.value === 3 && selectedFicha.boolean === false) ||
            (ficha.value === 3 && ficha.boolean === false)
          ) {
            const fichaEspecial = fichaEspecialIntercambiable(
              selectedFicha,
              ficha
            );

            if (fichaEspecial) {
              // Realizamos el intercambio de las fichas
              setFichas((prevFichas) => {
                const updatedFichas = [...prevFichas];
                const selectedFichaIndex = updatedFichas.findIndex(
                  (f) => f.isSelected
                );
                const fichaIndex = updatedFichas.findIndex(
                  (f) => f.value === ficha.value
                );

                // Intercambia los índices de las fichas
                const changeFichas = updatedFichas[selectedFichaIndex];

                updatedFichas[selectedFichaIndex] = {
                  ...updatedFichas[fichaIndex],
                  id: selectedFicha.id,
                };
                updatedFichas[fichaIndex] = {
                  ...changeFichas,
                  id: ficha.id,
                };

                // Cambiar los lados (booleans) de las Fichas
                updatedFichas[selectedFichaIndex] = {
                  ...updatedFichas[selectedFichaIndex],
                  boolean: !updatedFichas[selectedFichaIndex].boolean,
                };
                updatedFichas[fichaIndex] = {
                  ...updatedFichas[fichaIndex],
                  boolean: !updatedFichas[fichaIndex].boolean,
                };

                // Deseleccionar las fichas
                updatedFichas[selectedFichaIndex].isSelected = false;
                updatedFichas[fichaIndex].isSelected = false;
                playSwapSound();

                return updatedFichas;
              });
            }
          } else {
            // Verificar si se pueden intercambiar las fichas comunes
            const areIntercambiables = isIntercambiable(selectedFicha, ficha);

            if (areIntercambiables) {
              // Realizamos el intercambio de las fichas comunes
              setFichas((prevFichas) => {
                const updatedFichas = [...prevFichas];
                const selectedFichaIndex = updatedFichas.findIndex(
                  (f) => f.isSelected
                );
                const fichaIndex = updatedFichas.findIndex(
                  (f) => f.value === ficha.value
                );

                // Intercambiar las posiciones de las fichas
                const changeFichas = updatedFichas[selectedFichaIndex];

                updatedFichas[selectedFichaIndex] = {
                  ...updatedFichas[fichaIndex],
                  id: selectedFicha.id,
                };
                updatedFichas[fichaIndex] = {
                  ...changeFichas,
                  id: ficha.id,
                };

                // Cambiar los lados (booleans) de las Fichas
                updatedFichas[selectedFichaIndex] = {
                  ...updatedFichas[selectedFichaIndex],
                  boolean: !updatedFichas[selectedFichaIndex].boolean,
                };
                updatedFichas[fichaIndex] = {
                  ...updatedFichas[fichaIndex],
                  boolean: !updatedFichas[fichaIndex].boolean,
                };

                // Agregar la clase "rotate" para animación
                // updatedFichas[selectedFichaIndex].isRotating = true;
                // updatedFichas[fichaIndex].isRotating = true;

                // Deseleccionar las fichas después del intercambio
                updatedFichas[selectedFichaIndex].isSelected = false;
                updatedFichas[fichaIndex].isSelected = false;
                playSwapSound();
                return updatedFichas;
              });
            }
          }
        } else {
          // Si la ficha seleccionada es la misma o no cumple las condiciones, deseleccionamos todo
          setFichas((prevFichas) =>
            prevFichas.map((f) => ({ ...f, isSelected: false }))
          );
        }
      }
    }
  };

  // Proporciona el contexto y los valores a los componentes hijos
  return (
    <FichasContext.Provider value={{ fichas, handleFichaClick }}>
      {children}
    </FichasContext.Provider>
  );
};

export { FichasContext, FichasProvider };
