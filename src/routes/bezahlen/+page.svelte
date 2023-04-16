<script>
    import { kurse } from "$lib/Kursangebot";
</script>

<nav class="container-fluid">
    <ul>
      <li><a href="../" class="contrast"><strong>CodeHeiner</strong></a></li>
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
    <p>
      Vielen Dank für Ihr Vertrauen! <br>
      Wir freuen uns, Sie bald bei uns
      im Kurs begrüßen zu dürfen.<br>
      Ihre Quittung, in der noch einmal die wichtigsten Eckdaten zusammengefasst sind,
      haben wir Ihnen per Mail geschickt.<br>
      Falls Sie noch Fragen haben, dürfen Sie uns gerne über <a href="mailto:info@codeheiner.de">info@codeheiner.de</a>
      kontaktieren. 
    </p>
    <a role="button" class="secondary outline" href=".">Zurück zur Homepage</a>
</div>