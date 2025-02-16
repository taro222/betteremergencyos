# BetterEmergencyOS

Behebt diverse Styling-Fehler in BetterEmergencyOS.

## Installation

1. [Download](https://github.com/Just2Ez/emergencyos_addon/archive/refs/heads/main.zip) dieses Repository als ZIP-Datei.
2. Entpacke die ZIP-Datei.
3. Installiere die Extension in deinem Browser. [chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=de#load-unpacked) [opera](https://help.opera.com/en/extensions/testing/)

## Features

### <ins>Aktensystem</ins>

- Fügt Buttons hinzu, welche Aktenvorlagen automatisch einfügen.

<img src="https://i.imgur.com/kv2zYb8.png" width="50%">

- Auswahlliste für Straftaten skaliert nun richtig.

<img src="https://i.imgur.com/vALoLWe.png" width="50%">

### <ins>Ticketsystem</ins>

- Auswahlliste für Straftaten skaliert nun richtig.

<img src="https://i.imgur.com/zU00nKD.png" width="50%">

## Konfiguration

```js
const Akten = {
  fib_schnellakte: {
    buttonName: "FIB Schnellakte",
    template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdpcOCvqU8yWEzrha9Qx5u9oaV6JMAkRthxBbZ8O0MlrkpE7dvxx1BmGzqFXpf7u9eLxBB79vyuijoMrh4AassxhGJUKnHJvZA0h9sS7PC5wXaefd1bkXMlP0GTnOGq5KaST11B84y_U7zqr576SSodZWq4?key=mwQ9ohSnXMTXw-JODAKBdg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Schnellakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">00:00 - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">- Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="color: rgb(0, 0, 0);">- Der Beschuldigte forderte einen Anwalt.</span><span style="background-color: transparent; color: rgb(0, 0, 0);"> </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Der Beschuldigte verzichtet auf einen Anwalt. </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Es wurde ein Anwalt gefordert, konnte aber keiner gestellt werden.</span></p><p><span style="color: rgb(0, 0, 0);">- </span><span style="background-color: transparent; color: rgb(0, 0, 0);">Eilverfahren abgelehnt durch: DOJ-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
  },
  fib_strafakte: {
    buttonName: "FIB Strafakte",
    template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcQRa7U9S9IGRvfBah0Ty6p6PY_D5feAI51OKGSLraPsBDBYaIUQmgqKdBz9gQsOhNAljkK7B4URoyoo3iLQrM8FUF2sUvpH67dPLVJkzheJPind7uTSBt5TvwPNYAMX0Cx3IBmPsAD_5q5oeLQrgsC6H-D?key=vQ1odk3uQ0ufP-Xk6tkTRg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Strafakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">00:00 - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person:</strong></p><p><br></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">- Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="color: rgb(0, 0, 0);">- Der Beschuldigte forderte einen Anwalt.</span><span style="background-color: transparent; color: rgb(0, 0, 0);"> </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Der Beschuldigte verzichtet auf einen Anwalt. </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Es wurde ein Anwalt gefordert, konnte aber keiner gestellt werden.</span></p><p><span style="color: rgb(0, 0, 0);">- </span><span style="background-color: transparent; color: rgb(0, 0, 0);">Eilverfahren abgelehnt durch: DOJ-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
  },
  fib_kollektivakte: {
    buttonName: "FIB Kollektivakte",
    template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMHCZ2QGeBjVF-Fz57xoG_JLciyJtzReYxzxD4uDubMUISBZfSGFfVXsEBM8Fiio2KWLxhxZzg7dsmFowXIOrlJaIQtQPaUc1_xdQSIRC4-lqndu98RE9aR1K8BelWTr-dWMJ4bBGmMKuB0jhhFm9Sl-rN?key=4zvMuNh2FEQyWr85ICzYIg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Kollektivakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">00:00 - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person(-en):</strong></p><p><br></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Kollektivakte wurde von der DOJ-XX genehmigt.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
  },
}

const Parameter = {
  "{dienstnummer}": "FIB-XX",
  "{rang}": "Junior Agent",
  "{datum}": undefined // Wird automatisch in getUniqueInformation() aktualisiert.
}
```

### <ins>Akten</ins>

**`buttonName`**: Der Name des Buttons. (Beispiel: *"FIB Kollektivakte"*)

<img src="https://i.imgur.com/JIOaeMv.png" width="15%">

**`template`**: Die Vorlage, welche im Aktensystem kopiert wurde.

<img src="https://i.imgur.com/mUZwS8e.png" width="15%">

> [!NOTE]
> Weitere Aktenvorlagen können nach belieben erstellt werden und können sämtliche Parameter enthalten.

### <ins>Parameter</ins>

**`{dienstnummer}`**: Der Platzhalter für den Parameter. (Beispiel: *"Meine Dienstnummer ist {dienstnummer}."* - *"Meine Dienstnummer ist FIB-XX."*)

> [!NOTE]
> Weitere Parameter können nach belieben erstellt werden und anschließend in den Aktenvorlagen verwendet werden.

## Contact

<ins>Discord</ins>: **`_just2ez`**
