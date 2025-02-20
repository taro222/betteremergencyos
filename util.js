'use strict';

const techConfig = {
    selectorAkteDropdown: "body > form > div > div.app-inner-body > div > div:nth-child(2) > div:nth-child(2) > div > div > div.selectize-input.items.required.not-full.has-options",
    selectorAkteTextField: ["#editor > div.ql-editor.ql-blank", "#editor > div.ql-editor"],
    selectorAkteField: "body > form > div > div.app-inner-body > div > div:nth-child(3) > div > div > div",
    selectorTicketDropdown: "body > form > div > div.app-inner-body > div > div.cal-form > div:nth-child(2) > div > div > div > div.selectize-input.items.required.not-full.has-options",
    allowedPathnames: ["/Functions/Police/Function_NOL/AddCrime.php", "/Functions/Police/Function_Ticket/index.php"],
    selectorDienstnummer: "body > form > div > div.app-inner-body > div > div:nth-child(4) > div:nth-child(2) > div > input[type=text]"
}

let defaultConfig = {
    Parameter: [
      {
        placeholder: "{dienstnummer}",
        value: "FIB-XX"
      },
      {
        placeholder: "{rang}",
        value: "Junior Agent"
      }
    ],
    Akten: [
      {
        buttonName: "PD Schnellakte",
        template: `<div class="ql-editor" data-gramm="false" contenteditable="true"><h2 class="ql-align-center"><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">| - Schnellakte - |</span></h2><p><br></p><h2 class="ql-align-center"><strong style="background-color: transparent; color: rgb(28, 69, 135);">N</strong><span style="background-color: transparent; color: rgb(28, 69, 135);">arco</span><strong style="background-color: transparent; color: rgb(28, 69, 135);"> C</strong><span style="background-color: transparent; color: rgb(28, 69, 135);">ity</span><strong style="background-color: transparent; color: rgb(28, 69, 135);"> P</strong><span style="background-color: transparent; color: rgb(28, 69, 135);">olice</span><strong style="background-color: transparent; color: rgb(28, 69, 135);"> D</strong><span style="background-color: transparent; color: rgb(28, 69, 135);">epartment</span></h2><p><br></p><p><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">| Tatort und Zeitraum: |</span></p><p><strong style="background-color: rgb(0, 51, 102); color: rgb(255, 255, 255);"><em>Würfelpark, PLZ 8054</em></strong><span style="background-color: transparent; color: rgb(21, 23, 32);">, 20.02.2025 10:45 - 11:10 Uhr</span></p><p><br></p><p><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">| Beschuldigte Person: |</span></p><p><span style="background-color: transparent; color: rgb(21, 23, 32);">Adam Walker</span></p><p><br></p><p><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">| Weitere beteiligte Einheiten/Zeugen: |</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PA-73</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">weitere PD Beamte</span></p><p><br></p><p><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">| Abgenommene Gegenstände: |</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">1x Pistole</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">1x Munition</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">1x Smartphone</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">1x Fallschirm</span></p><p><br></p><p><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">| Bemerkungen: |</span></p><ul><li><span style="background-color: transparent;">Die Rechte wurden dem Beschuldigten durch PD-02 im Beisein von PA-73 verlesen und verstanden.</span></li><li><span style="background-color: transparent;">Dieser </span><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">verzichtete</span><span style="background-color: transparent; color: rgb(21, 23, 32);"> </span><span style="background-color: transparent;">auf einen Rechtsbeistand</span></li><li class="ql-align-justify"><span style="background-color: transparent;">Eilverfahren wurde abgelehnt durch: RA-16</span></li></ul><p><br></p><p><span style="background-color: rgb(28, 69, 135); color: rgb(255, 255, 255);">| Gezeichnet von: |</span></p><p><span style="background-color: transparent; color: rgb(21, 23, 32);">Gunnar Eriksson | PD-02 | Assistant Chief</span></p><p><br></p></div>`
      },
      {
        buttonName: "FIB Strafakte",
        template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcQRa7U9S9IGRvfBah0Ty6p6PY_D5feAI51OKGSLraPsBDBYaIUQmgqKdBz9gQsOhNAljkK7B4URoyoo3iLQrM8FUF2sUvpH67dPLVJkzheJPind7uTSBt5TvwPNYAMX0Cx3IBmPsAD_5q5oeLQrgsC6H-D?key=vQ1odk3uQ0ufP-Xk6tkTRg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Strafakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">{zeit} - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person:</strong></p><p><br></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">- Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="color: rgb(0, 0, 0);">- Der Beschuldigte forderte einen Anwalt.</span><span style="background-color: transparent; color: rgb(0, 0, 0);"> </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Der Beschuldigte verzichtet auf einen Anwalt. </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Es wurde ein Anwalt gefordert, konnte aber keiner gestellt werden.</span></p><p><span style="color: rgb(0, 0, 0);">- </span><span style="background-color: transparent; color: rgb(0, 0, 0);">Eilverfahren abgelehnt durch: DOJ-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
      },
      {
        buttonName: "FIB Kollektivakte",
        template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMHCZ2QGeBjVF-Fz57xoG_JLciyJtzReYxzxD4uDubMUISBZfSGFfVXsEBM8Fiio2KWLxhxZzg7dsmFowXIOrlJaIQtQPaUc1_xdQSIRC4-lqndu98RE9aR1K8BelWTr-dWMJ4bBGmMKuB0jhhFm9Sl-rN?key=4zvMuNh2FEQyWr85ICzYIg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Kollektivakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">{zeit} - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person(-en):</strong></p><p><br></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Kollektivakte wurde von der DOJ-XX genehmigt.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
      },
    ],
    replaceParameter: true
}

const getStorageData = key =>
    new Promise((resolve, reject) =>
      chrome.storage.local.get(key, result =>
        chrome.runtime.lastError
            ? reject(Error(chrome.runtime.lastError.message))
            : resolve(result)
      )
    )
  
const setStorageData = data =>
    new Promise((resolve, reject) =>
      chrome.storage.local.set(data, () =>
        chrome.runtime.lastError
            ? reject(Error(chrome.runtime.lastError.message))
            : resolve()
      )
    )

async function loadConfiguration() {
    let { beos_config } = await getStorageData("beos_config")
    if (typeof beos_config === "undefined") {
        // No Config found -> Adding to Storage
        await setStorageData({ beos_config: defaultConfig })
        currentConfig = defaultConfig
        console.log("NO CONFIGURATION FOUND. SETTING DEFAULT.")
    } else {
        // Config found
        currentConfig = beos_config
        console.log("LOADED CONFIGURATION", currentConfig)
    }
}
