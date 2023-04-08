<script>
    import { kurse } from "$lib/Kursangebot";
</script>

<nav class="container-fluid" style={"background-color: #546e7a"}>
    <ul>
      <li><a href="../" class="contrast"><strong>CodeHeiner 💻</strong></a></li>
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

<div class="container" style={"margin-top: 80px"}>
    <h1>Zahlung erfolgt!</h1>
    <p>Vielen Dank für Ihr Vertrauen. Wir freuen uns, Sie bald bei uns
        im Seminar begrüßen zu dürfen.<br>Sie sollten eine Email mit der
        Quittung erhalten haben; schauen Sie doch einmal in Ihr
        elektronisches Postfach! In der Rechnung finden Sie zudem die
        Kursdaten. Sollten Sie Fragen haben, können Sie uns jederzeit
        per Mail oder telefonisch erreichen.<br>Bis bald!
    </p>
    <a href=".">Zurück zur Homepage</a>
</div>