<script>
  import { kurse } from "../lib/Kursangebot";
</script>
<nav class="container-fluid">
  <ul>
    <li>
      
      <a href="https://www.codeheiner.de" class="contrast">
        <img src="chlogo.png" alt="logo" style={"height: 1.6vh; padding-left: 4px; margin-bottom: 5px"}>
        <strong>CodeHeiner</strong>
      </a>
    </li>
  </ul>

  <ul>
    <li>
      <details role="list" dir="rtl">
        <summary aria-haspopup="listbox" role="link" class="contrast">Intensiv-Kurse</summary>
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
<footer class="container">
  <nav>
      <ul>
          <li><a href="https://www.codeheiner.de/impressum">Impressum</a></li>
          <li><a href="https://www.codeheiner.de/anfahrt">Anfahrt</a></li>
      </ul>
  </nav>
</footer>