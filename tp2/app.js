setInterval(function () {
  function creerElement(tagName, opts) {
    return {
      tagName,
      attributs: opts.attributs,
      enfants: opts.enfants,
    };
  }

  gif1 = "https://media.giphy.com/media/xL7PDV9frcudO/giphy.gif";
  gif2 = "https://media.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif";
  gif3 = "https://media.giphy.com/media/QsZol42CPIjMzke1QW/giphy.gif";
  gif4 = "https://media.giphy.com/media/bcrOR2stk6tKIxqPOZ/giphy.gif";

  const tab = [gif1, gif2, gif3, gif4];

  const test = creerElement("div", {
    attributs: {
      id: "main",
    },
    enfants: [
      Math.random(), //Donne un chiffre aléatoire
      creerElement("img", {
        attributs: {
          //src: 'https://media.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif',
          src: tab[Math.floor(Math.random() * tab.length)],
        },
      }),
      creerElement("form", {
        attributs: {
          action: "#",
          method: "post",
        },
        enfants: [
          creerElement("label", {
            attributs: {
              for: "name",
            },
            enfants: ["Nom : "],
          }),
          creerElement("input", {
            attributs: {
              type: "text",
              id: "name",
              name: "name_user",
            },
          }),
          creerElement("button", {
            attributs: {
              type: "submit",
            },
            enfants: ["Submit"],
          }),
        ],
      }),
    ],
  });

  //Permet de récupérer un DOM Virtuel
  function rendreNoeud(noeud) {
    let mainDiv = document.createElement(noeud.tagName);

    //On boucle pour récupérer l'attributs
    for (let i in noeud.attributs) {
      mainDiv.setAttribute(i, noeud.attributs[i]);
    }

    //On boucle afin de récupérer tout les enfants
    for (var child in noeud.enfants) {
      if (noeud.enfants[child].tagName == null) {
        mainDiv.appendChild(document.createTextNode(noeud.enfants[child]));
      } else {
        mainDiv.appendChild(rendreNoeud(noeud.enfants[child]));
      }
    }

    return mainDiv;
  }

  //Permet de renvoyer a l'intérieur du point de montage le DOM Virtuel
  function monter(noeud, pointDeMontage) {
    //pointDeMontage.insertAdjacentElement("afterbegin", noeud);
    pointDeMontage.replaceWith(noeud);
  }

  /*
    function differences(ancienArbre, nouvelArbre)
    {
        
    }
    */

  const insideMain = rendreNoeud(test);
  monter(insideMain, document.getElementById("main"));
}, 5000); //On set un interval de 5s
