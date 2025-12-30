import React, { createContext, useContext, useState } from "react";
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
  const [idioma, setIdioma] = useState("en"); // es por defecto, puede ser "en" para inglés

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

  const aboutText = {
    es: {
      text1: `GONZO RA: AUTOR DE "ARCANE CODE".`,
      text2: `REINA JIRVEG: MÚSICA, DISEÑO Y DESARROLLO WEB.`,
      legal:
        "ESTE JUEGO Y SU CONTENIDO ESTÁN PROTEGIDOS POR LAS LEYES DE DERECHOS DE AUTOR Y PROPIEDAD INTELECTUAL. CUALQUIER USO NO AUTORIZADO ESTÁ PROHIBIDO.",
      donationTitle: "¿TE GUSTÓ EL JUEGO?",
      donationText:
        "PODÉS APOYARNOS CON UN CAFECITO EN KO-FI Y AYUDAR A QUE SIGAMOS CREANDO ESTE UNIVERSO. CADA APORTE, POR MÁS PEQUEÑO QUE SEA, HACE UNA GRAN DIFERENCIA. ¡GRACIAS POR SER PARTE!",
      donationLink: "https://ko-fi.com/reinajirveg",
      donationBtn: "Apoyanos en Ko-Fi",
    },
    en: {
      text1: `GONZO RA: AUTHOR OF "ARCANE CODE".`,
      text2: `REINA JIRVEG: MUSIC, DESIGN, AND WEB DEVELOPMENT.`,
      legal:
        "THIS GAME AND ITS CONTENT ARE PROTECTED BY COPYRIGHT AND INTELLECTUAL PROPERTY LAWS. ANY UNAUTHORIZED USE IS PROHIBITED.",
      donationTitle: "DID YOU ENJOY THE GAME?",
      donationText:
        "YOU CAN SUPPORT US WITH A COFFEE ON KO-FI AND HELP US KEEP BUILDING THIS UNIVERSE. EVERY SMALL CONTRIBUTION MAKES A BIG DIFFERENCE. THANK YOU FOR BEING PART OF IT!",
      donationLink: "https://ko-fi.com/reinajirveg",
      donationBtn: "Support us on Ko-Fi",
    },
    jap: {
      text1: `GONZO RA: "ARCANE CODE"の著者。`,
      text2: `REINA JIRVEG: 音楽、デザイン、ウェブ開発。`,
      legal:
        "このゲームとそのコンテンツは、著作権および知的財産権法によって保護されています。無断使用は禁止されています。",
      donationTitle: "ゲームを楽しんでいただけましたか？",
      donationText:
        "Ko-fiでコーヒーをご馳走いただければ、この世界を作り続ける力になります。小さなご支援が大きな力になります。参加してくれてありがとう！",
      donationLink: "https://ko-fi.com/reinajirveg",
      donationBtn: "Ko-Fiで支援する",
    },
    zh: {
      text1: `GONZO RA: 《ARCANE CODE》的作者。`,
      text2: `REINA JIRVEG: 音乐、设计和网页开发。`,
      legal: "本游戏及其内容受版权和知识产权法保护。未经授权的使用是被禁止的。",
      donationTitle: "你喜欢这个游戏吗？",
      donationText:
        "欢迎通过 Ko-fi 请我们喝杯咖啡，支持我们继续创造这个世界。哪怕是微小的支持，也会带来巨大的帮助。感谢你成为其中的一部分！",
      donationLink: "https://ko-fi.com/reinajirveg",
      donationBtn: "在 Ko-Fi 上支持我们",
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
        hardBtn: hardBtn[idioma],
        normalBtn: normalBtn[idioma],
        playBtn: playBtn[idioma],
        exitBtn: exitBtn[idioma],
        campainBtn: campaignLabel[idioma],
        campainInfo: campainInfo[idioma],
        aboutText: aboutText[idioma],
        moreInfoBtn: moreInfoBtn[idioma],
        endGame: endGame[idioma],
        startGame: startGame[idioma],
        startHardGame: startHardGame[idioma],
        scoreText: scoreText[idioma],
        loading: loading[idioma],
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
