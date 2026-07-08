import { createContext, useContext, useState } from "react";
import { coinsImages } from "../components/Ficha/coinsImages";
import hexa1 from "../images/hexa_azul1.webp";
import gameOver from "../images/ruleGameComplete.webp";
import hexa2 from "../images/hexa_magenta1.webp";
import inicio from "../images/Inicio juego.webp";
import fichaRoja from "../images/ficha roja.webp";
import final from "../images/finishGame.webp";
import celestialMove from "../images/celestialMove.webp";
import terrenalMove from "../images/terrenalMove.webp";
import fichasMove from "../images/fichasMovimientos.webp";

// Crear el contexto
const TextosContext = createContext();

// Proveer el contexto
export const TextosProvider = ({ children }) => {
  const [idioma, setIdioma] = useState("en");

  const installGate = {
    es: {
      title: "✦ PREPARA TU VIAJE ✦",
      body: "Arcane Code fue concebido para jugarse a pantalla completa.",
      body2:
        "La versión instalada ofrece la experiencia para la que el juego fue diseñado.",
      primary: "Activar pantalla completa",
      continue: "Continuar en navegador",
      iosTitle: "Para activar la pantalla completa en iPhone o iPad:",
      iosSteps: [
        "Abrí Arcane Code desde Safari.",
        "Tocá el botón Compartir.",
        "Elegí «Agregar a pantalla de inicio».",
        "Abrí el juego desde el nuevo ícono.",
      ],
      manualTitle: "Instalación manual:",
      manualSteps: [
        "Abrí el menú del navegador.",
        "Seleccioná «Instalar aplicación» o «Agregar a pantalla de inicio».",
        "Iniciá Arcane Code desde el nuevo ícono.",
      ],
      done: "Entendido",
      back: "Volver",
    },

    en: {
      title: "✦ PREPARE YOUR JOURNEY ✦",
      body: "Arcane Code was designed to be played in fullscreen.",
      body2:
        "The installed version provides the experience the game was designed for.",
      primary: "Enable Fullscreen",
      continue: "Continue in Browser",
      iosTitle: "To enable fullscreen on iPhone or iPad:",
      iosSteps: [
        "Open Arcane Code in Safari.",
        "Tap the Share button.",
        "Choose 'Add to Home Screen'.",
        "Launch the game from the new icon.",
      ],
      manualTitle: "Manual installation:",
      manualSteps: [
        "Open your browser menu.",
        "Select 'Install App' or 'Add to Home Screen'.",
        "Launch Arcane Code from the new icon.",
      ],
      done: "Got it",
      back: "Back",
    },

    jap: {
      title: "✦ 旅立ちの準備 ✦",
      body: "Arcane Code は全画面でプレイすることを前提に設計されています。",
      body2: "インストール版では、本来のゲーム体験をお楽しみいただけます。",
      primary: "全画面を有効にする",
      continue: "ブラウザで続ける",
      iosTitle: "iPhone / iPad で全画面表示にする方法:",
      iosSteps: [
        "Safari で Arcane Code を開きます。",
        "共有ボタンをタップします。",
        "「ホーム画面に追加」を選択します。",
        "追加されたアイコンからゲームを起動します。",
      ],
      manualTitle: "手動インストール:",
      manualSteps: [
        "ブラウザのメニューを開きます。",
        "「アプリをインストール」または「ホーム画面に追加」を選択します。",
        "追加されたアイコンから Arcane Code を起動します。",
      ],
      done: "了解",
      back: "戻る",
    },

    zh: {
      title: "✦ 准备启程 ✦",
      body: "Arcane Code 专为全屏游玩而设计。",
      body2: "安装后的版本能够提供游戏原本设计的完整体验。",
      primary: "启用全屏模式",
      continue: "继续在浏览器中游玩",
      iosTitle: "在 iPhone 或 iPad 上启用全屏：",
      iosSteps: [
        "使用 Safari 打开 Arcane Code。",
        "点击“分享”按钮。",
        "选择“添加到主屏幕”。",
        "从新创建的图标启动游戏。",
      ],
      manualTitle: "手动安装：",
      manualSteps: [
        "打开浏览器菜单。",
        "选择“安装应用”或“添加到主屏幕”。",
        "从新图标启动 Arcane Code。",
      ],
      done: "知道了",
      back: "返回",
    },
  };
  const unsupportedScreen = {
    es: {
      title: "PANTALLA NO COMPATIBLE",
      text1:
        "Arcane Code necesita más espacio para mostrar el tablero correctamente.",
      text2:
        "Activá la pantalla completa, instalá la app o usá un dispositivo con mayor resolución.",
    },
    en: {
      title: "UNSUPPORTED SCREEN",
      text1: "Arcane Code needs more space to display the board correctly.",
      text2:
        "Enable fullscreen, install the app, or use a device with a larger resolution.",
    },
    jap: {
      title: "非対応の画面",
      text1: "Arcane Code を正しく表示するには、より広い画面領域が必要です。",
      text2:
        "全画面を有効にするか、アプリをインストールするか、より高い解像度の端末をご利用ください。",
    },
    zh: {
      title: "不支持的屏幕",
      text1: "Arcane Code 需要更多屏幕空间才能正确显示棋盘。",
      text2: "请启用全屏、安装应用，或使用分辨率更高的设备。",
    },
  };
  const textos = {
    es: {
      reglasPiezas: [
        {
          title: "ARCANE CODE",
          text: "Arcane Code es un juego de ingenio en solitario para mayores de 9 años. Consta de dos(2) losetas hexagonales que se mantendrán fijas durante la partida, y once(11) fichas circulares que se moverán alrededor de los hexágonos hasta lograr el objetivo del juego.",
          img: [inicio],
        },
        {
          title: "HEXÁGONOS",
          text: "Las dos losetas hexagonales (Arcanos) contienen las imágenes de todas las fichas en juego (Sellos Mágicos) y comparten la imagen de la ficha especial (roja). Ésta última definirá la colocación de ambas losetas en el seteo del juego.",

          img: [hexa1, hexa2],
        },
        {
          title: "FICHAS:",
          text: "Todas las fichas cuentan con dos caras que corresponden a los Estados de un mismo Sello: Estado Terrenal (simbolo liso) y Estado Celestial (simbolo con cortes). Según el lado que esté visible/activo será el movimiento que podrá realizarse con dicha ficha.",

          img: [coinsImages["5-true"], coinsImages["5-false"]],
        },
        {
          title: "OBJETIVO DEL JUEGO:",
          text: "Mover los Sellos hasta que todas ocupen el lugar que les corresponde alrededor de los Arcanos.",
          img: [gameOver],
        },
      ],
      reglasJuego: [
        {
          title: "PREPARACIÓN Y MECÁNICAS DEL JUEGO:",
          text: "La partida comienza con las dos losetas hexagonales (Arcanos) enfrentando las ilustraciones de la ficha especial (Sello Rojo), con una separación suficiente para que entre ambas quepa una ficha. Luego, de forma aleatoria, se colocarán los once(11) Sellos de forma adyacente a cada lado de los Arcanos. Los Sellos pueden estar en cualquiera de sus dos Estados (Terrenal o Celestial). Una vez colocados los Arcanos y los Sellos Mágicos comienza el juego. Los Sellos deberán moverse hasta quedar todos en su lugar correspondiente. Para realizar esos movimientos, deberán seguir la regla de su Estado activo, Terrenal o Celestial. Según el Estado en el que estén, será el movimiento que puedan realizar. Los movimientos son intercambios de lugares entre dos Sellos (con el mismo Estado activo) que pueden estar adyacentes o a una ficha de distancia.",
          img: [inicio],
        },
        {
          title: "MOVIMIENTO DE LAS FICHAS:",
          text: "La primera regla para intercambiar Sellos de lugar es que coincidan en su Estado. Las Sellos Terrenales se intercambian sólo con otras Terrenales y los Celestiales con otros Celestiales. Cada vez que intercambian su lugar, también cambiarán de Estado los Sellos que participen del movimiento. Si eran Celestiales se convierten en Terrenales y viceversa (volteando las fichas luego de hacer el movimiento). IMPORTANTE: Pueden intercambiarse Sellos Mágicos ubicados en distintos Arcanos .",
          img: [fichasMove],
        },
        {
          title: "SELLOS TERRENALES:",
          text: "Cuando un Sello Mágico tiene activo su Estado Terrenal, sólo podrá cambiar de lugar con otro del mismo Estado que se encuentre a su lado. Una vez realizado el cambio se convertirán en Sellos de Estado Celestial.",
          img: [coinsImages["7-true"], terrenalMove],
        },
        {
          title: "SELLOS CELESTIALES:",
          text: "Cuando un Sello está en Estado Celestial sólo podrá cambiar de lugar con otro del mismo Estado que se encuentre a un Sello de distancia. Una vez realizado el cambio se convertirán en Sellos de Estado Terrenal.",
          img: [coinsImages["9-false"], celestialMove],
        },
        {
          title: "FICHA ESPECIAL (ROJA):",
          text: "Este Sello se mueve igual que los demás, pero tiene la particularidad de poder hacer un movimiento especial. Cuando este Sello se encuentra en Estado Celestial, podrá cambiar de lugar con otro Sello del mismo Estado que se encuentre adyacente, como si ambas estuvieran en Estado Terrenal.",
          img: [coinsImages["3-false"], fichaRoja],
        },
        {
          title: "FIN DE LA PARTIDA",
          text: "Los Sellos se moverán hasta que cada uno esté en el lugar que le corresponde según los símbolos en el interior de los Arcanos, sin importar en que Estado queden.",
          img: [final],
        },
      ],
    },
    en: {
      reglasPiezas: [
        {
          title: "ARCANE CODE",
          text: "Arcane Code is a solo puzzle game for players aged 9 and above. It consists of two fixed hexagonal tiles and eleven circular pieces that move around the hexagons to achieve the game's objective.",
          img: [inicio],
        },
        {
          title: "HEXAGONS",
          text: "The two hexagonal tiles (Arcanos) contain images of all the game pieces (Magical Seals) and share the image of the SPECIAL PIECE (red). This piece will define the placement of both tiles during the game setup.",
          img: [hexa1, hexa2],
        },
        {
          title: "PIECES:",
          text: "All pieces have two sides corresponding to two states of the same Seal: the Terrestrial state (plain symbol) and the Celestial state (symbol with cuts). The movement that can be made with each piece depends on which side is facing up/active.",
          img: [coinsImages["5-true"], coinsImages["5-false"]],
        },
        {
          title: "GAME OBJECTIVE:",
          text: "Move the Seals until each one occupies its corresponding position around the Arcanos.",
          img: [gameOver],
        },
      ],
      reglasJuego: [
        {
          title: "SETUP AND GAME MECHANICS:",
          text: "The game starts with the two hexagonal tiles (Arcanos) facing the images of the special piece (Red Seal), with enough space between them to fit one piece. Then, the eleven (11) Seals will be placed randomly adjacent to each side of the Arcanos. The Seals can be in either of their two states (Terrestrial or Celestial). Once the Arcanos and the Magical Seals are placed, the game begins. The Seals must move until they are all in their correct positions. To make these moves, the Seals must follow the rule of their active state, either Terrestrial or Celestial. Based on their current state, they will be able to swap places with another Seal that is either adjacent or one Seal away.",
          img: [inicio],
        },
        {
          title: "MOVEMENT OF THE PIECES:",
          text: "The first rule for swapping Seals is that they must match in their active state. Terrestrial Seals can only swap with other Terrestrial Seals, and Celestial Seals can only swap with other Celestial Seals. When a swap occurs, the Seals involved will also switch states. If they were Celestial, they will become Terrestrial, and vice versa (flip the pieces after the swap). IMPORTANT: Seals can be swapped between different Arcanos.",
          img: [fichasMove],
        },
        {
          title: "TERRESTRIAL SEALS:",
          text: "When a Seal is in the Terrestrial state, it can only swap places with another Seal of the same state that is adjacent. After the swap, the Seals will become Celestial.",
          img: [coinsImages["7-true"], terrenalMove],
        },
        {
          title: "CELESTIAL SEALS:",
          text: "When a Seal is in the Celestial state, it can only swap places with another Seal of the same state that is one Seal away. After the swap, the Seals will become Terrestrial.",
          img: [coinsImages["9-false"], celestialMove],
        },
        {
          title: "SPECIAL PIECE (RED):",
          text: "This piece moves like the others, but it has the special ability to make a unique move. When the Special Piece is in the Celestial state, it can swap places with another Seal of the same state that is adjacent, just like if both were in the Terrestrial state.",
          img: [coinsImages["3-false"], fichaRoja],
        },
        {
          title: "END OF THE GAME",
          text: "The game ends when all Seals are in their correct places according to the images on the Arcanos, regardless of the state they end up in.",
          img: [final],
        },
      ],
    },
    jap: {
      reglasPiezas: [
        {
          title: "ARCANE CODE",
          text: "Arcane Codeは9歳以上向けのソロパズルゲームで、2つの固定された六角形のタイルと11個の円形の駒を使って、目的を達成するために六角形の周りを移動します。",
          img: [inicio],
        },
        {
          title: "六角形",
          text: "2つの六角形のタイル（アルカノス）は、ゲームに登場するすべての駒（魔法の封印）の画像を含んでおり、特別な駒（赤色）を共有しています。この特別な駒は、ゲームセットアップ中の両タイルの配置を決定します。",
          img: [hexa1, hexa2],
        },
        {
          title: "駒:",
          text: "すべての駒には、同じ封印の2つの状態（地上状態と天上状態）に対応する2つの面があります。駒がどちらの面を上にしているかによって、移動できる内容が決まります。",
          img: [coinsImages["5-true"], coinsImages["5-false"]],
        },
        {
          title: "ゲームの目的:",
          text: "封印を移動させて、すべてがアルカノスの周りに対応する位置に置かれるようにします。",
          img: [gameOver],
        },
      ],
      reglasJuego: [
        {
          title: "準備とゲームの仕組み:",
          text: "ゲームは2つの六角形のタイル（アルカノス）が特別な駒（赤い封印）の画像を向き合わせ、両タイルの間に1つの駒が入るくらいのスペースを確保した状態で始まります。次に、ランダムに11個の封印がアルカノスの両側に隣接して配置されます。封印はどちらかの状態（地上または天上）で配置できます。アルカノスと魔法の封印が配置されるとゲームが始まります。封印は、すべて正しい位置に移動する必要があります。移動を行うためには、アクティブな状態、つまり地上または天上のルールに従わなければなりません。その状態に基づいて、隣接する封印または1つ離れた封印と交換することができます。",
          img: [inicio],
        },
        {
          title: "駒の移動:",
          text: "封印を交換するための最初のルールは、それらが同じ状態であることです。地上の封印は他の地上の封印としか交換できませんし、天上の封印は他の天上の封印としか交換できません。交換が行われると、参加した封印は状態を切り替えます。天上状態の封印は地上状態になり、逆に地上状態の封印は天上状態になります（交換後に駒をひっくり返します）。重要: 封印は異なるアルカノス間でも交換できます。",
          img: [fichasMove],
        },
        {
          title: "地上の封印:",
          text: "地上状態の封印は、隣接する同じ状態の封印としか交換できません。交換後、封印は天上状態に変わります。",
          img: [coinsImages["7-true"], terrenalMove],
        },
        {
          title: "天上の封印:",
          text: "天上状態の封印は、1つ離れた同じ状態の封印としか交換できません。交換後、封印は地上状態に変わります。",
          img: [coinsImages["9-false"], celestialMove],
        },
        {
          title: "特別な駒（赤）:",
          text: "この駒は他の駒と同様に移動しますが、特別な能力を持っています。赤い封印が天上状態の時、隣接する同じ状態の封印と交換することができ、まるで両方が地上状態であるかのように動かせます。",
          img: [coinsImages["3-false"], fichaRoja],
        },
        {
          title: "ゲームの終了",
          text: "ゲームはすべての封印がアルカノスの内部の画像に基づいて正しい位置に置かれた時点で終了します。封印がどの状態で終了しても構いません。",
          img: [final],
        },
      ],
    },
    zh: {
      reglasPiezas: [
        {
          title: "ARCANE CODE",
          text: "Arcane Code 是一个适合9岁及以上玩家的单人智力游戏。它由两个固定的六边形瓷砖和11个圆形棋子组成，这些棋子将在六边形周围移动以实现游戏目标。",
          img: [inicio],
        },
        {
          title: "六边形",
          text: "这两个六边形瓷砖（阿卡诺）包含所有游戏棋子（魔法印章）的图像，并共享特殊棋子（红色印章）的图像。这个特殊棋子将在游戏设置中定义两个瓷砖的摆放位置。",
          img: [hexa1, hexa2],
        },
        {
          title: "棋子:",
          text: "所有棋子都有两个面，对应于同一个印章的两种状态：地面状态（平符号）和天界状态（带切割符号）。根据棋子朝上的面/激活的状态，可以进行不同的移动。",
          img: [coinsImages["5-true"], coinsImages["5-false"]],
        },
        {
          title: "游戏目标:",
          text: "移动印章，直到每个印章都位于其在阿卡诺周围对应的位置。",
          img: [gameOver],
        },
      ],
      reglasJuego: [
        {
          title: "游戏准备与机制:",
          text: "游戏开始时，两个六边形瓷砖（阿卡诺）面对特殊棋子（红色印章）的图像，并且两者之间留有足够的空间可以放置一颗棋子。然后，将随机将11个印章放置在两个阿卡诺的每一侧相邻的位置。这些印章可以处于两种状态之一（地面或天界）。一旦阿卡诺和魔法印章被放置好，游戏开始。印章需要移动，直到它们都到达正确的位置。为了进行这些移动，印章必须遵循其激活状态的规则，无论是地面状态还是天界状态。根据它们当前的状态，它们将能够与相邻或一颗棋子距离的印章交换位置。",
          img: [inicio],
        },
        {
          title: "棋子的移动:",
          text: "交换印章位置的第一个规则是它们必须匹配相同的激活状态。地面状态的印章只能与其他地面状态的印章交换，天界状态的印章只能与其他天界状态的印章交换。当交换发生时，参与交换的印章将切换状态。如果它们是天界状态的，它们将变为地面状态，反之亦然（交换后翻转棋子）。重要：印章可以在不同的阿卡诺之间交换。",
          img: [fichasMove],
        },
        {
          title: "地面状态的印章:",
          text: "当印章处于地面状态时，它只能与相邻的相同状态的印章交换位置。交换后，印章将变为天界状态。",
          img: [coinsImages["7-true"], terrenalMove],
        },
        {
          title: "天界状态的印章:",
          text: "当印章处于天界状态时，它只能与距离一颗棋子远的相同状态的印章交换位置。交换后，印章将变为地面状态。",
          img: [coinsImages["9-false"], celestialMove],
        },
        {
          title: "特殊棋子（红色）:",
          text: "这个棋子的移动与其他棋子相同，但它有特殊的能力进行独特的移动。当该棋子处于天界状态时，它可以与相邻的同状态的印章交换位置，就像两个棋子都处于地面状态一样。",
          img: [coinsImages["3-false"], fichaRoja],
        },
        {
          title: "游戏结束",
          text: "游戏结束时，所有印章将根据阿卡诺内部的图像，摆放到它们正确的位置，无论它们最终处于哪种状态。",
          img: [final],
        },
      ],
    },
  };
  const langBtn = {
    es: "IDIOMA",
    en: "LANGUAGE",
    jap: "言語",
    zh: "语言", // Chino simplificado
  };

  const aboutBtn = {
    es: "ACERCA",
    en: "ABOUT",
    jap: "について",
    zh: "关于", // Chino simplificado
  };

  const normalBtn = {
    es: "NORMAL",
    en: "NORMAL",
    jap: "ノーマル",
    zh: "普通", // Chino simplificado
  };

  const playBtn = {
    es: "JUGAR",
    en: "PLAY",
    jap: "遊ぶ",
    zh: "玩",
  };

  const hardBtn = {
    es: "DIFÍCIL",
    en: "HARD",
    jap: "ハード",
    zh: "困难",
  };

  const exitBtn = {
    es: "SALIR",
    en: "EXIT",
    jap: "終了",
    zh: "退出", // Chino simplificado
  };
  const campaignLabel = {
    es: "CAMPAÑA",
    en: "CAMPAIGN",
    jap: "キャンペーン",
    zh: "战役模式",
  };
  const campainInfo = {
    es: "Este contenido estará disponible próximamente para quienes desbloqueen la versión completa.",
    en: "This content will be available soon for those who unlock the full version.",
    jap: "このコンテンツは、フルバージョンをアンロックした方に近日公開予定です。",
    zh: "此内容即将推出，仅限解锁完整版本的用户访问。",
  };
  const moreInfoBtn = {
    es: "MÁS INFO",
    en: "MORE INFO",
    jap: "もっと詳しく",
    zh: "更多信息", // Chino simplificado
  };

  const instructBtn = {
    es: {
      title: "INSTRUCCIONES",
      message:
        "POR FAVOR GIRA TU DISPOSITIVO A VERTICAL PARA VER LAS INSTRUCCIONES.",
    },
    en: {
      title: "INSTRUCTIONS",
      message:
        "PLEASE ROTATE YOUR DEVICE TO PORTRAIT MODE TO SEE THE INSTRUCTIONS.",
    },
    jap: {
      title: "ルール",
      message: "縦向きモードにするために、デバイスを回転させてください。",
    },
    zh: {
      title: "说明",
      message: "请将设备旋转为竖屏模式以查看说明。",
    }, // Chino simplificado
  };
  const instructPrompt = {
    es: {
      title: "¿QUERÉS VER UN VIDEO TUTORIAL?",
      text1: "PUEDES MIRAR EL VIDEO O CONTINUAR A LAS INSTRUCCIONES ESCRITAS.",
      text2: "CONTINUAR",
      text3: "VER VIDEO",
    },
    en: {
      title: "WOULD YOU LIKE TO WATCH A TUTORIAL VIDEO?",
      text1: "YOU CAN WATCH THE VIDEO OR CONTINUE TO THE WRITTEN INSTRUCTIONS.",
      text2: "CONTINUE",
      text3: "WATCH VIDEO",
    },
    jap: {
      title: "チュートリアル動画を見ますか？",
      text1: "動画を見るか、書かれた説明を続けることができます。",
      text2: "続ける",
      text3: "動画を見る",
    },
    zh: {
      title: "要观看教程视频吗？",
      text1: "你可以观看视频或继续查看书面说明。",
      text2: "继续",
      text3: "观看视频",
    },
  };
  const instructNav1 = {
    es: "Anterior",
    en: "Previous",
    jap: "前へ",
    zh: "上一步",
  };
  const instructNav2 = {
    es: "Siguiente",
    en: "Next",
    jap: "次へ",
    zh: "下一步",
  };
  const aboutText = {
    es: {
      text1: `GONZO RA: AUTOR DE "ARCANE CODE".`,
      text2: `REINA JIRVEG: MÚSICA, DISEÑO Y DESARROLLO WEB.`,
      legal:
        "ESTE JUEGO Y SU CONTENIDO ESTÁN PROTEGIDOS POR LAS LEYES DE DERECHOS DE AUTOR Y PROPIEDAD INTELECTUAL. CUALQUIER USO NO AUTORIZADO ESTÁ PROHIBIDO.",
      donationTitle: "¿TE GUSTÓ EL JUEGO?",

      donationText:
        "PODÉS APOYAR EL DESARROLLO DE CLAVE ARCANA Y AYUDARNOS A SEGUIR EXPANDIENDO ESTE UNIVERSO. CADA APORTE, POR MÁS PEQUEÑO QUE SEA, HACE UNA GRAN DIFERENCIA. ¡GRACIAS POR SER PARTE DE ESTA AVENTURA!",

      donationLink: "https://reinajirveg.itch.io/arcane-code",

      donationBtn: "Apoyar el Proyecto",
    },
    en: {
      text1: `GONZO RA: AUTHOR OF "ARCANE CODE".`,
      text2: `REINA JIRVEG: MUSIC, DESIGN, AND WEB DEVELOPMENT.`,
      legal:
        "THIS GAME AND ITS CONTENT ARE PROTECTED BY COPYRIGHT AND INTELLECTUAL PROPERTY LAWS. ANY UNAUTHORIZED USE IS PROHIBITED.",
      donationTitle: "DID YOU ENJOY THE GAME?",

      donationText:
        "YOU CAN SUPPORT THE DEVELOPMENT OF ARCANE CODE AND HELP US CONTINUE EXPANDING THIS UNIVERSE. EVERY CONTRIBUTION, NO MATTER HOW SMALL, MAKES A BIG DIFFERENCE. THANK YOU FOR BEING PART OF THIS ADVENTURE!",

      donationLink: "https://reinajirveg.itch.io/arcane-code",

      donationBtn: "Support the Project",
    },
    jap: {
      text1: `GONZO RA: "ARCANE CODE"の著者。`,
      text2: `REINA JIRVEG: 音楽、デザイン、ウェブ開発。`,
      legal:
        "このゲームとそのコンテンツは、著作権および知的財産権法によって保護されています。無断使用は禁止されています。",
      donationTitle: "ゲームを楽しんでいただけましたか？",

      donationText:
        "ARCANE CODE の開発を応援していただけると、この世界をさらに広げていく大きな力になります。どんな小さなご支援でも、とても大きな意味があります。この冒険の一員になっていただき、ありがとうございます。",

      donationLink: "https://reinajirveg.itch.io/arcane-code",

      donationBtn: "プロジェクトを応援する",
    },
    zh: {
      text1: `GONZO RA: 《ARCANE CODE》的作者。`,
      text2: `REINA JIRVEG: 音乐、设计和网页开发。`,
      legal: "本游戏及其内容受版权和知识产权法保护。未经授权的使用是被禁止的。",
      donationTitle: "你喜欢这个游戏吗？",

      donationText:
        "你可以支持 ARCANE CODE 的开发，帮助我们继续扩展这个世界。无论支持大小，都会带来巨大的帮助。感谢你成为这场冒险的一部分！",

      donationLink: "https://reinajirveg.itch.io/arcane-code",

      donationBtn: "支持这个项目",
    },
  };

  const endGame = {
    es: {
      title: "¡HAS GANADO!",
      text1: `¡FELICITACIONES POR RESOLVER EL CÓDIGO! TU TIEMPO HA SIDO:`,
      text2: "TE INVITAMOS A SEGUIRNOS Y APOYAR NUESTROS CANALES.",
      btn: "CONTINUAR",
      premium1: "¿QUERÉS ACCEDER A LA VERSIÓN COMPLETA DEL JUEGO?",
      premium2: "SUSCRIBITE Y DESBLOQUEÁ TODO EL CONTENIDO EXCLUSIVO.",
    },
    en: {
      title: "YOU WIN!",
      text1: `CONGRATULATIONS FOR SOLVING THE CODE. YOUR TIME WAS:`,
      text2: `WE INVITE YOU TO FOLLOW AND SUPPORT OUR CHANNELS.`,
      btn: "CONTINUE",
      premium1: "WANT TO UNLOCK THE FULL VERSION OF THE GAME?",
      premium2: "SUBSCRIBE AND UNLOCK ALL THE EXCLUSIVE CONTENT.",
    },
    jap: {
      title: "勝利",
      text1: `コードを解決しておめでとうございます！あなたの時間は：`,
      text2:
        "このゲームを楽しんでいただけたなら、ぜひ私たちのチャンネルをフォローして応援してください。",
      btn: "つづける",
      premium1: "ゲームの完全版にアクセスしたいですか？",
      premium2: "登録して、すべての限定コンテンツをアンロックしましょう。",
    },
    zh: {
      title: "你赢了",
      text1: `恭喜你破解了代码！你的时间是：`,
      text2: "如果你喜欢这个游戏，欢迎关注并支持我们的频道。",
      btn: "继续",
      premium1: "想要访问完整版本的游戏吗？",
      premium2: "订阅并解锁所有专属内容。",
    },
  };
  const privacyPolicy = {
    es: {
      title: "Política de Privacidad",
      updated: "Última actualización: Mayo 2026",
      intro: "Clave Arcana respeta la privacidad de sus usuarios.",
      p1: "Actualmente, el juego no requiere registro de cuentas, no solicita datos personales y no recopila información identificable del usuario.",
      p2: "El juego puede utilizar tecnologías locales del navegador, como almacenamiento local (localStorage), caché o service workers, con el único propósito de mejorar la experiencia de juego y el funcionamiento de la aplicación.",
      p3: "Clave Arcana no vende, comparte ni comercializa información de los usuarios.",
      p4: "En futuras versiones, el juego podría incorporar herramientas de análisis, publicidad, cuentas de usuario u otras funcionalidades online. En caso de implementarse, esta política será actualizada para reflejar dichos cambios.",
      p5: "Todos los contenidos del juego, incluyendo código, diseño, imágenes, interfaz, mecánicas y elementos visuales, son propiedad de sus respectivos autores y se encuentran protegidos por las leyes de propiedad intelectual.",
      p6: "Para consultas relacionadas con esta política, puedes contactar al desarrollador mediante los canales oficiales del proyecto.",
    },

    en: {
      title: "Privacy Policy",
      updated: "Last updated: May 2026",
      intro: "Clave Arcana respects the privacy of its users.",
      p1: "Currently, the game does not require account registration, does not request personal data, and does not collect personally identifiable information.",
      p2: "The game may use local browser technologies such as localStorage, cache, or service workers solely to improve gameplay experience and application performance.",
      p3: "Clave Arcana does not sell, share, or commercialize user information.",
      p4: "Future versions of the game may include analytics tools, advertising, user accounts, or other online features. If implemented, this policy will be updated accordingly.",
      p5: "All game content, including code, design, images, interface, mechanics, and visual elements, is the property of their respective authors and is protected by intellectual property laws.",
      p6: "For inquiries regarding this policy, you may contact the developer through the project's official channels.",
    },

    jap: {
      title: "プライバシーポリシー",
      updated: "最終更新日：2026年5月",
      intro: "Clave Arcana はユーザーのプライバシーを尊重します。",
      p1: "現在、このゲームではアカウント登録は不要であり、個人情報の入力や収集は行っていません。",
      p2: "ゲーム体験やアプリの動作を向上させる目的で、localStorage、キャッシュ、Service Worker などのブラウザのローカル技術を使用する場合があります。",
      p3: "Clave Arcana はユーザー情報を販売、共有、または商業利用することはありません。",
      p4: "将来的に、分析ツール、広告、ユーザーアカウント、その他のオンライン機能が追加される可能性があります。その場合、本ポリシーは更新されます。",
      p5: "コード、デザイン、画像、インターフェース、ゲームシステム、ビジュアル要素を含むすべてのコンテンツは、それぞれの権利者に帰属し、知的財産法によって保護されています。",
      p6: "本ポリシーに関するお問い合わせは、プロジェクトの公式連絡手段をご利用ください。",
    },

    zh: {
      title: "隐私政策",
      updated: "最后更新：2026年5月",
      intro: "Clave Arcana 尊重用户的隐私。",
      p1: "目前，游戏无需注册账户，不会要求提供个人信息，也不会收集可识别用户身份的数据。",
      p2: "游戏可能会使用浏览器本地技术，例如 localStorage、缓存或 Service Worker，仅用于提升游戏体验和应用性能。",
      p3: "Clave Arcana 不会出售、共享或商业化用户信息。",
      p4: "未来版本可能会加入数据分析工具、广告、用户账户或其他在线功能。如有相关变更，本政策将同步更新。",
      p5: "游戏中的所有内容，包括代码、设计、图片、界面、机制和视觉元素，均归其版权所有者所有，并受知识产权法律保护。",
      p6: "如对本政策有任何疑问，请通过项目官方渠道联系开发者。",
    },
  };
  const termsConditions = {
    es: {
      title: "Términos y Condiciones",
      updated: "Última actualización: Mayo 2026",
      intro:
        "Al acceder y utilizar Clave Arcana, aceptas los presentes Términos y Condiciones.",
      p1: "Clave Arcana es un videojuego distribuido como aplicación web (PWA) con fines recreativos y de entretenimiento.",
      p2: "El usuario se compromete a utilizar el juego de manera legal y respetuosa, evitando cualquier intento de:",
      item1: "Modificar el funcionamiento del juego.",
      item2: "Explotar errores o vulnerabilidades.",
      item3: "Copiar o redistribuir contenido sin autorización.",
      item4: "Interferir con la experiencia de otros usuarios.",
      p3: "Todo el contenido presente en Clave Arcana, incluyendo código fuente, identidad visual, nombre, mecánicas, gráficos, textos y elementos audiovisuales, pertenece a sus autores y se encuentra protegido por derechos de propiedad intelectual.",
      p4: "El desarrollador podrá actualizar, modificar o discontinuar funcionalidades del juego en cualquier momento y sin previo aviso.",
      p5: "Clave Arcana se ofrece «tal como está», sin garantías explícitas sobre disponibilidad permanente, compatibilidad total o ausencia absoluta de errores técnicos.",
      p6: "El uso del juego implica la aceptación de estos términos.",
    },

    en: {
      title: "Terms and Conditions",
      updated: "Last updated: May 2026",
      intro:
        "By accessing and using Clave Arcana, you agree to these Terms and Conditions.",
      p1: "Clave Arcana is a web application (PWA) video game distributed for recreational and entertainment purposes.",
      p2: "Users agree to use the game lawfully and respectfully, avoiding any attempt to:",
      item1: "Modify the operation of the game.",
      item2: "Exploit bugs or vulnerabilities.",
      item3: "Copy or redistribute content without authorization.",
      item4: "Interfere with the experience of other users.",
      p3: "All content within Clave Arcana, including source code, visual identity, name, gameplay mechanics, graphics, text, and audiovisual elements, belongs to its respective authors and is protected by intellectual property laws.",
      p4: "The developer may update, modify, or discontinue game features at any time without prior notice.",
      p5: 'Clave Arcana is provided "as is," without explicit guarantees regarding permanent availability, full compatibility, or the complete absence of technical errors.',
      p6: "Your use of the game constitutes acceptance of these terms.",
    },

    jap: {
      title: "利用規約",
      updated: "最終更新日：2026年5月",
      intro:
        "Clave Arcana にアクセスし利用することで、本利用規約に同意したものとみなされます。",
      p1: "Clave Arcana は娯楽目的で提供される Web アプリ（PWA）ゲームです。",
      p2: "ユーザーは以下の行為を行わないことに同意します。",
      item1: "ゲームの動作を改変すること。",
      item2: "バグや脆弱性を悪用すること。",
      item3: "許可なくコンテンツをコピーまたは再配布すること。",
      item4: "他のユーザーの体験を妨害すること。",
      p3: "ソースコード、ビジュアルデザイン、名称、ゲームシステム、グラフィック、文章、映像・音声を含むすべてのコンテンツは権利者に帰属し、知的財産法により保護されています。",
      p4: "開発者は事前の通知なくゲームの機能を更新、変更、または終了する場合があります。",
      p5: "Clave Arcana は「現状のまま」提供され、継続的な提供、完全な互換性、技術的な不具合が存在しないことを保証するものではありません。",
      p6: "ゲームを利用することで、本規約に同意したものとみなされます。",
    },

    zh: {
      title: "使用条款",
      updated: "最后更新：2026年5月",
      intro: "访问和使用 Clave Arcana 即表示您同意本使用条款。",
      p1: "Clave Arcana 是一款以娱乐为目的发布的网页应用（PWA）游戏。",
      p2: "用户承诺合法、合理地使用本游戏，并避免以下行为：",
      item1: "修改游戏的运行方式。",
      item2: "利用漏洞或程序缺陷。",
      item3: "未经授权复制或重新分发游戏内容。",
      item4: "干扰其他用户的游戏体验。",
      p3: "Clave Arcana 的所有内容，包括源代码、视觉设计、名称、游戏机制、图形、文本和视听元素，均归其版权所有者所有，并受知识产权法律保护。",
      p4: "开发者可在任何时候更新、修改或终止游戏功能，恕不另行通知。",
      p5: "Clave Arcana 按“现状”提供，不保证永久可用、完全兼容或绝对不存在技术错误。",
      p6: "使用本游戏即表示您接受本条款。",
    },
  };
  const startGame = {
    es: {
      text1: "¡PREPÁRATE!",
      textMobile:
        "PARA UNA MEJOR EXPERIENCIA, ACTIVA LA ROTACIÓN AUTOMÁTICA EN TU DISPOSITIVO, GIRA LA PANTALLA A MODO HORIZONTAL. UNA VEZ HECHO ESTO, CONTINÚA.",
    },
    en: {
      text1: "GET READY!",
      textMobile:
        "FOR THE BEST EXPERIENCE, ENABLE AUTO-ROTATION ON YOUR DEVICE, TURN THE SCREEN TO LANDSCAPE MODE. ONCE DONE, CONTINUE.",
    },
    jap: {
      text1: "準備して!",
      textMobile:
        "より良い体験のために、デバイスで自動回転を有効にして、画面を横向きモードにし、完了したら続行してください。",
    },
    zh: {
      text1: "准备好了吗！",
      textMobile:
        "为获得最佳体验，请启用设备的自动旋转功能，并将屏幕转为横向模式。完成后继续。",
    },
  };

  const startHardGame = {
    es: {
      text1: "¡LOS SELLOS SON BLOQUEADOS POR HECHIZOS MALIGNOS!",
      text2: "Un hechizo atrapará a un Sello aleatorio.",
      text3:
        "Resuelve sus casillas aledañas y se desbloqueará. ¡Pero cuidado! Pueden venir nuevos en camino.",
    },
    en: {
      text1: "SEALS ARE BLOCKED BY EVIL SPELLS!",
      text2: "A spell will trap a random Seal.",
      text3:
        "Solve the surrounding tiles to unlock it. But be careful! More may come your way.",
    },
    jap: {
      text1: "封印は邪悪な呪文で封じられています！",
      text2: "呪文がランダムな封印を閉じ込めます。",
      text3:
        "周囲のマスを解決すると解除されます。ただし注意してください！さらに新しい封印が現れる可能性があります。",
    },
    zh: {
      text1: "封印被邪恶的咒语阻挡了！",
      text2: "一个咒语会随机封印一个印章。",
      text3: "解决周围的方块即可解锁。但要小心！可能会有更多出现。",
    },
  };

  const scoreText = {
    es: {
      text1: "¡INCREÍBLE, HAS INGRESADO AL RANKING DE ARCANE CODE!",
    },
    en: {
      text1: "AMAZING! YOU HAVE ENTERED THE RANKING OF ARCANE CODE!",
    },
    jap: {
      text1: "信じられない！アーケインコードのランキングに入りました！",
    },
    zh: {
      text1: "不可思议！你已进入《ARCANE CODE》的排行榜！",
    },
  };

  const loading = {
    es: "CARGANDO...",
    en: "LOADING...",
    jap: "読み込み中...",
    zh: "加载中...",
  };

  const footer = {
    es: {
      developed:
        "DESARROLLADO POR REINA JIRVEG v1.0.0 | JUNÍN, BUENOS AIRES | 2026",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
    },

    en: {
      developed:
        "DEVELOPED BY REINA JIRVEG v1.0.0 | JUNÍN, BUENOS AIRES | 2026",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
    },

    jap: {
      developed: "開発者：REINA JIRVEG v1.0.0 | アルゼンチン・フニン | 2026",
      terms: "利用規約",
      privacy: "プライバシーポリシー",
    },

    zh: {
      developed:
        "开发者：REINA JIRVEG v1.0.0 | 阿根廷 布宜诺斯艾利斯省胡宁 | 2026",
      terms: "使用条款",
      privacy: "隐私政策",
    },
  };

  const installMessage = {
    es: {
      title: "Instalar Arcane Code",
      body: "Instalá el juego para disfrutar de la mejor experiencia.",
      benefits: {
        fullscreen: "Jugar en pantalla completa",
        homescreen: "Acceso directo desde la pantalla de inicio",
        offline: "Jugar sin conexión",
        faster: "Inicio más rápido",
      },
      ios: "Para instalar Arcane Code, tocá el botón Compartir y luego seleccioná «Agregar a pantalla de inicio».",
      firefox:
        "La instalación como aplicación no está disponible en Firefox. Para una mejor experiencia, utilizá un navegador compatible como Chrome o Edge.",
      action: "Instalar ahora",
      dismiss: "Más tarde",
    },

    en: {
      title: "Install Arcane Code",
      body: "Install the game for the best experience.",
      benefits: {
        fullscreen: "Play in fullscreen",
        homescreen: "Launch from your Home Screen",
        offline: "Play offline",
        faster: "Faster startup",
      },
      ios: "To install Arcane Code, tap the Share button and then select 'Add to Home Screen'.",
      firefox:
        "Installing as an app is not available in Firefox. For the best experience, use a supported browser such as Chrome or Edge.",
      action: "Install Now",
      dismiss: "Maybe Later",
    },

    jap: {
      title: "Arcane Code をインストール",
      body: "最高の体験のためにゲームをインストールしてください。",
      benefits: {
        fullscreen: "全画面でプレイ",
        homescreen: "ホーム画面からすぐに起動",
        offline: "オフラインでプレイ",
        faster: "より高速に起動",
      },
      ios: "Arcane Code をインストールするには、共有ボタンをタップして「ホーム画面に追加」を選択してください。",
      firefox:
        "Firefoxではアプリとしてインストールできません。より快適にプレイするには、Chrome または Edge をご利用ください。",
      action: "今すぐインストール",
      dismiss: "後で",
    },

    zh: {
      title: "安装 Arcane Code",
      body: "安装游戏，获得最佳体验。",
      benefits: {
        fullscreen: "全屏游戏",
        homescreen: "从主屏幕快速启动",
        offline: "离线游玩",
        faster: "启动速度更快",
      },
      ios: "要安装 Arcane Code，请点击“共享”按钮，然后选择“添加到主屏幕”。",
      firefox:
        "Firefox 暂不支持将此游戏安装为应用。为了获得最佳体验，建议使用 Chrome 或 Edge。",
      action: "立即安装",
      dismiss: "稍后",
    },
  };
  const supportBtn = {
    es: "Comentarios y soporte",
    en: "Feedback & Support",
    jap: "ご意見・サポート",
    zh: "反馈与支持",
  };
  // Cambiar el idioma
  const cambiarIdioma = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  return (
    <TextosContext.Provider
      value={{
        about: aboutBtn[idioma],
        language: langBtn[idioma],
        reglas: textos[idioma],
        instructBtn: instructBtn[idioma],
        instructPrompt: instructPrompt[idioma],
        instructNav1: instructNav1[idioma],
        instructNav2: instructNav2[idioma],
        installMessage: installMessage[idioma],
        installGate: installGate[idioma],
        unsupportedScreen: unsupportedScreen[idioma],
        hardBtn: hardBtn[idioma],
        normalBtn: normalBtn[idioma],
        playBtn: playBtn[idioma],
        exitBtn: exitBtn[idioma],
        privacyPolicy: privacyPolicy[idioma],
        termsConditions: termsConditions[idioma],
        campainBtn: campaignLabel[idioma],
        campainInfo: campainInfo[idioma],
        aboutText: aboutText[idioma],
        moreInfoBtn: moreInfoBtn[idioma],
        endGame: endGame[idioma],
        footer: footer[idioma],
        startGame: startGame[idioma],
        startHardGame: startHardGame[idioma],
        scoreText: scoreText[idioma],
        loading: loading[idioma],
        supportBtn: supportBtn[idioma],

        idioma,

        cambiarIdioma,
      }}
    >
      {children}
    </TextosContext.Provider>
  );
};

// Hook para consumir el contexto
export const useTextos = () => {
  return useContext(TextosContext);
};
