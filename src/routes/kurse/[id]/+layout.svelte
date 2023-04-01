<script>

    import {kurse} from "$lib/Kursangebot"

</script>

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
<slot />