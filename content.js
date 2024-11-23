const Config = {
  selectorAkteDropdown: "body > form > div > div.app-inner-body > div > div:nth-child(2) > div:nth-child(2) > div > div > div.selectize-input.items.required.not-full.has-options",
  selectorAkteTextField: ["#editor > div.ql-editor.ql-blank", "#editor > div.ql-editor"],
  selectorAkteField: "body > form > div > div.app-inner-body > div > div:nth-child(3) > div > div > div",
  selectorTicketDropdown: "body > form > div > div.app-inner-body > div > div.cal-form > div:nth-child(2) > div > div > div > div.selectize-input.items.required.not-full.has-options",
  allowedPathnames: ["/Functions/Police/Function_NOL/AddCrime.php", "/Functions/Police/Function_Ticket/index.php"],
  selectorDienstnummer: "body > form > div > div.app-inner-body > div > div:nth-child(4) > div:nth-child(2) > div > input[type=text]"
}

// SETTINGS
let currentDienstnummer = "FIB-XX"
let currentRang = "Junior Agent"

const Akten = {
  defaultAkte: `<p>Tatort: 0000 Lager
Tatzeitraum: 23:55
Aufnehmende Beamten: IAA-99
Weitere beteiligte Einheiten / Zeugen: IAA-74, IAA-52 
Beschuldtige Person(-en): Vorname Nachname
Geschädigte Person(-en): /
Sachverhalt aus der Sicht des Beamten: TV wollte goldenen Revolver an Beamten verkaufen über Mobile.
Abgenommene Gegenstände von IAA-99:
1x Handy

Bemerkung:
-Rechte wurden von IAA-74, in Anwesenheit von IAA-99 vorgelesen.
-Medizinischer Dienst wurde nicht gestellt/gefordert.

Legale Gegenstände können von den US Marshals (!) NICHT wieder ausgehändigt werden, da NICHT kooperativ.</p>`,
  newVorlage: `<p class="ql-align-center"><strong>International Affairs Agency</strong></p>
<p class="ql-align-center"><strong>IAA-99</strong></p>

-| Tatzeitraum |-
14.07.2024 - 00:00
 
-| Tatort |-
9325 Lager

-| Name des Tatverdächtigen |-


-| Sachverhalt |-

 
Rechte wurden von der IAA-74 zum frühestmöglichen Zeitpunkt nach Festsetzung vor dem TV vorgelesen und wurden verstanden.
Folgender Beamter kann dies bezeugen: IAA-99

-| Zeugen waren |-
IAA-99


-| Es wurden folgende Gegenstände abgenommen |-
1x 

Legale Gegenstände können von den US Marshals (!) NICHT wieder ausgehändigt werden, da NICHT kooperativ.

-| Unterschrift |-
[IAA-99] | IAA Agent`,
  fib_schnellakte: ``,
  fib_musterakte: ``,
  fib_kollektivakte: ``
}

// IFRAMES:
// /Functions/Police/Function_NOL/AddCrime.php -> Akte erstellen
// /Functions/Police/Function_Ticket/index.php -> Ticketsystem

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    init()
  }
}

function drowdownHeight(selector) {
  const element = document.querySelector(selector)
  if (element) {
    if (element.style.height != "50%") {
      element.style.height = "50%"
    }
  } else {
    setTimeout(drowdownHeight, 300, selector)
  }
}

async function getCurrentDienstnummer() {
  const element = document.querySelector(Config.selectorDienstnummer)
  currentDienstnummer = element.value
  Akten.fib_schnellakte = `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdpcOCvqU8yWEzrha9Qx5u9oaV6JMAkRthxBbZ8O0MlrkpE7dvxx1BmGzqFXpf7u9eLxBB79vyuijoMrh4AassxhGJUKnHJvZA0h9sS7PC5wXaefd1bkXMlP0GTnOGq5KaST11B84y_U7zqr576SSodZWq4?key=mwQ9ohSnXMTXw-JODAKBdg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">${currentDienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Schnellakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">00:00 - 23:59</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Schnellaktenhinweis:</strong></p><p><em style="background-color: transparent; color: rgb(0, 0, 0);">Ganz kurzer Sachverhalt -&gt; Maximal 1-2 Sätze.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Der Beschuldigte verzichtet auf einen Anwalt. </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Es wurde ein Anwalt gefordert, konnte aber keiner gestellt werden.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[${currentDienstnummer}] [${currentRang}] [Federal Investigation Bureau]</strong></p>`
  Akten.fib_musterakte = `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcQRa7U9S9IGRvfBah0Ty6p6PY_D5feAI51OKGSLraPsBDBYaIUQmgqKdBz9gQsOhNAljkK7B4URoyoo3iLQrM8FUF2sUvpH67dPLVJkzheJPind7uTSBt5TvwPNYAMX0Cx3IBmPsAD_5q5oeLQrgsC6H-D?key=vQ1odk3uQ0ufP-Xk6tkTRg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">${currentDienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Strafakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">00:00 - 23:59</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person(-en):</strong></p><p><br></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[${currentDienstnummer}] [${currentRang}] [Federal Investigation Bureau]</strong></p>`
  Akten.fib_kollektivakte = `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMHCZ2QGeBjVF-Fz57xoG_JLciyJtzReYxzxD4uDubMUISBZfSGFfVXsEBM8Fiio2KWLxhxZzg7dsmFowXIOrlJaIQtQPaUc1_xdQSIRC4-lqndu98RE9aR1K8BelWTr-dWMJ4bBGmMKuB0jhhFm9Sl-rN?key=4zvMuNh2FEQyWr85ICzYIg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">${currentDienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Kollektivakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">00:00 - 23:59</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person(-en):</strong></p><p><br></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Kollektivakte wurde von der DOJ-XX genehmigt.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[${currentDienstnummer}] [${currentRang}] [Federal Investigation Bureau]</strong></p>`
}

function insertAkte(templateAkte) {
  const element1 = document.querySelector(Config.selectorAkteTextField[0])
  const element2 = document.querySelector(Config.selectorAkteTextField[1])
  if (element1) {
    element1.innerHTML = templateAkte
    console.log("BetterEmergencyOS: Akte erfolgreich eingefügt.")
  } else if (element2) {
    element2.innerHTML = templateAkte
    console.log("BetterEmergencyOS: Akte erfolgreich eingefügt.")
  } else {
    setTimeout(insertAkte, 300, templateAkte)
  }
}

function addTemplateButton(label, parentSelector, akte) {
  const element = document.querySelector(parentSelector)
  if (element) {
    const newButton = document.createElement('h1');
    newButton.textContent = label;
    newButton.classList.add("app-btn")
    newButton.style.marginTop = "7px"
    newButton.style.marginRight = "5px"
    newButton.style.padding = "8px 20px"
    newButton.style.userSelect = "none"
    newButton.addEventListener('click', function () {
      insertAkte(akte);
    });
    element.appendChild(newButton);
  } else {
    setTimeout(addTemplateButton, 300)
  }
}

async function init() {
  if (Config.allowedPathnames.includes(window.location.pathname)) {
    console.log("BetterEmergencyOS: RUNNING")
    console.log(window.location.pathname)
    switch (window.location.pathname) {
      case "/Functions/Police/Function_NOL/AddCrime.php":
        drowdownHeight(Config.selectorAkteDropdown)
        getCurrentDienstnummer()
        //addTemplateButton("Default", Config.selectorAkteField, Akten.defaultAkte)
        //addTemplateButton("IAA Vorlage", Config.selectorAkteField, Akten.newVorlage)
        addTemplateButton("FIB Schnellakte", Config.selectorAkteField, Akten.fib_schnellakte)
        addTemplateButton("FIB Musterakte", Config.selectorAkteField, Akten.fib_musterakte)
        addTemplateButton("FIB Kollektivakte", Config.selectorAkteField, Akten.fib_kollektivakte)
        break;
      case "/Functions/Police/Function_Ticket/index.php":
        drowdownHeight(Config.selectorTicketDropdown)
        break;
    }
  }
}