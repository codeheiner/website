<script>
  import { kurse } from "../lib/Kursangebot";
</script>

 <!-- Hero -->
 <div class="hero" data-theme="dark">
    <!-- <div style={"width: 100%; background-color:red"}>
      <p>
        Wir sind von der großen Nachfrage überrascht und bitten um Ihr Verständnis, 
        falls es zu längeren Wartezeiten auf einen Platz kommt.
      </p>
    </div> -->
    <nav class="container-fluid">
      <ul>
        <li><a href="./" class="contrast"><strong>CodeHeiner</strong></a></li>
      </ul>

      <ul>
        <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" class="contrast">Kursangebot</summary>
            <ul role="listbox">

              {#each kurse as kurs, i}
                <li><a href="/kurse/{ i }" data-theme-switcher="auto">{ kurs.name }</a></li>
              {/each}
              
            </ul>
          </details>
        </li>
        <!-- <li>
          <details role="list" dir="rtl">
            <summary aria-haspopup="listbox" role="link" class="contrast">Examples</summary>
            <ul role="listbox">
              <li><a href="../preview/">Preview</a></li>
              <li><a href="../preview-rtl/">Right-to-left</a></li>
            </ul>
          </details>
        </li> -->

      </ul>

    </nav>

    <header class="container">
      <hgroup>
        <h1>Programmierkurse in Darmstadt</h1>
        <h2>für alle vom Anfänger bis zum erfahrenen Praktiker<br>
      </h2>
      </hgroup>
      <p><a href="kursübersicht.pdf" role="button" download>Kursangebot als PDF downloaden</a></p>
    </header>

  </div>

  <!-- Main -->
  <main class="container" style={"margin-top: 80px"}>
    <div class="grid">

      <section style={"text-align:justify"}>
        <hgroup>
          <h2>Professionelle Qualität!</h2>
          <h3>Nachhaltige Wissensvermittlung braucht einen professionellen Rahmen.</h3>
        </hgroup>
        <p>
          Unser Angebot von extrem relevanten Kursen setzt grundsätzlich kein Wissen auf dem jeweiligen Gebiet voraus. 
          Um einen unserer Kurse erfolgreich zu absolvieren benötigen Sie daher nicht mehr als die Lust am Lernen. 
          Wir bringen Ihnen alles bei was Sie wissen sollten, um durchstarten und sich nach dem Kurs selbstständig 
          in der neuen Thematik weiter zu bilden! 
          Damit Ihre neu erworbenen Fähigkeiten auch dauerhaft im Kopf bleiben, setzen wir in jedem Kurs ein Augenmerk auf Verständnis 
          der gelehrten Konzepte ohne dabei zu weit in die graue Theorie einzutauchen. 
          Nur wenn Sie das "Warum" kennen, erreichen Sie die geistige Flexibilität die sehr gute Entwickler auszeichnet.
          Rezepte helfen Ihnen dagegen nicht. Für dieses Verständnis ist es unabdingbar, auch über den Tellerrand zu blicken 
          und  besipielsweise durch spielerischen Vergleich von anderen Sprachen abgrenzen und zu ermitteln, wo die Stärken und die Grenzen
          der Sprache liegen.
        </p>
        <figure>
          <img src="konf.jpg" alt="Konferenzraum">
          <figcaption>...</figcaption>
        </figure>
        
        <hgroup>
          <h2>Softskill-Training inbegriffen!</h2>
          <h3>Zum Programmieren gehört mehr als Fakten-Wissen.</h3>
        </hgroup>
          
        <p>
          Auch Softskills machen den guten Programmierer!<br>
          Neben den technischen Grundlagen, werden wir auch die Softskills herausarbeiten, die 
          ein schnelles Vorankommen in diesem spannenden aber zuweilen kniffligen Betätigungsfeld
          stark begünstigen. Zu diesem Zweck werden wir versuchen, über den gesamten Kurs hinweg 
          immer wieder die Sichtweise des Ingenieurs und Tüftlers einzunehmen, um schon in kurzer 
          Zeit ein wenig Routine zu bekommen.  
        </p>
        
        <hgroup>
          <h2>Zu guter Letzt: Unser Versprechen an Sie</h2>
          <h3>Individuelle Tips und Wissen das bleibt.</h3>
        </hgroup>        <p>
          Wir wollen Ihnen keinen Kurs verkaufen wie er schon in tausendfacher Ausführung im Netz 
          oder bei anderen Anbietern existiert. Sie sollen nach dem Kurs mit dem Wissen nach Hause gehen, 
          etwas gelernt zu haben von dem Sie dauerhaftzehren können, Wissen das Ihnen einen echten Nutzen
          bringt. Dafür setzen wir auf Interaktion, knifflige Aufgaben und die Methode des verbalen 
          Austauschs über den von Ihnen geschrieben Programmiercode.Außerdem ermöglichen wir jedem 
          Teilnehmer am Ende des Kurses ein Feedbackgespräch und das Stellen von Fragen im Vier-Augen-Gespräch.
        </p>
      </section>
    
      <aside>
        <a href="." aria-label="Example"><img src="konf.jpg" alt="Architecture"></a>
        <p>
          <a href="." >Unsere Räumlichkeiten</a><br>
          <small>Für Verpflegung ist immer gesorgt! </small>
        </p>
        <a href="." aria-label="Example" ><img src="thinkpad.png" alt="Architecture"></a>
        <p>
          <a href="." >Ihr Equipment</a><br>
          <small>Wir stellen für die Kursdauer ein Lenovo Thinkpad.</small>
        </p>
        <!-- <a href="." aria-label="Example" ><img src="matthew-hamilton-Ru3Ap8TNcsk-unsplash-1500-750.jpg" alt="Architecture"></a>
        <p>
          <a href="." >So sehen zufriedene Teilnehmer aus!</a><br>
          <small>Wir sind zufrieden wenn Sie es sind!</small>
        </p> -->
      </aside>

    </div>
  </main><!-- ./ Main -->

  <!-- <section id="buy" aria-label="Subscribe example">
    <div class="container">
      <article>
        <hgroup>
          <h2>Sichern Sie sich jetzt Ihren Platz im Kurs.</h2>
          <h3>Für Knabberzeug und Getränke ist ebenfalls gesorgt!</h3>
        </hgroup>

        <form action="?/checkout" method="POST">

          <label for="kurs">Kurs</label>

          <select id="kurs" name="kurs" required>
            <option>Programmieren für Einsteiger 1</option>
            <option>Python DevOps</option>
          </select>

          <label for="date">Wählen Sie ein Kursdatum
            <input type="date" id="date" name="date">
          </label>
                
          <button type="submit" id="checkout-button">Checkout</button>
  
        </form>

      </article>
    </div>
  </section> -->

  <!-- Für fast die Hälfte der befragten Firmen stellen Kosten (48 %) und Zeitmangel (46 %) die größten Hürden bei der Digitalisierung ihres Unternehmens dar, gefolgt von Unsicherheit bezüglich Sicherheit und Datenschutz (39 %). Für mehr als ein Drittel (37 %) der Befragten ist mangelndes Know-how die größte Digitalisierungs-Bremse, bei knapp einem Viertel (24 %) scheitert es am Interesse. -->