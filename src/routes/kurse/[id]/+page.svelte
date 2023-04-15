<script>
    import { page } from '$app/stores';
    export let data;

</script>



<div class="container" style={"margin-top: 80px"}>

    
    <!-- <a style={"background-color: #546e7a; border:none"} role="button" href=".">Kursplan (PDF)</a> -->
    
    <hgroup>
        <h1>{ data.name }</h1>
        <h2>Preis: { data.preis }€ | Azubis & Studenten: { data.studi_preis }€<br>
      </h2>
    </hgroup>
    {#if data.disclaimer}
      <mark>{ data.disclaimer } </mark><br><br>
    {/if}
    <p>{ data.beschreibung }</p>
    <hgroup>
        <h2>Kursübersicht</h2>
        <h3>
            Hier sehen Sie die wichtigesten Bausteine des Kurses. 
            <br>
      </h3>
    </hgroup>

  <table role="grid">
    <thead>
      <tr>
        <th scope="col">Samstag</th>
        <th scope="col">So</th>
      </tr>
    </thead>
    <tbody>
        {#each data.rows as rows, i}
            <tr>
                {#each rows as row}
                    <td>{ row }</td>
                {/each}
            </tr>
        {/each}
    </tbody>
    <!-- <tfoot>
      <tr>
        <th scope="col">#</th>
        <td scope="col">Total</td>
        <td scope="col">Total</td>
        <td scope="col">Total</td>
        <td scope="col">Total</td>
      </tr>
    </tfoot> -->
  </table>

  <!-- <a role="button" href="./test.txt" download="Test">
    Vollstädnigen Plan runterladen (PDF)
  </a> -->

    <hgroup>
        <h2>Buchung</h2>
        <h3>
            Wählen Sie ein Datum aus (Kursstart)<br>
        </h3>
    </hgroup>


    <form action="?/buchung" method="POST">

        <fieldset class="grid">
          
          {#each data.start_dates as date, i}

            <article style={"display: flex; flex-direction: column; "}>

              <div style={"display: flex; flex-direction: row; justify-content: space-between; align-items: center"}>
                
                <label for={ i }>
                  { date }
                </label> 
                
                <input type="radio" id={ i } name="kurs_datum" value={ date }>

              </div>

            </article>

          {/each}

        </fieldset>
    
        <!-- <label for="kurs_datum">Kurs-Start
          <input type="date" id="kurs_datum" name="kurs_datum" min={ data.start } step={ data.turnus }>
        </label> -->
              
        <button type="submit" class="primary" id="checkout-button">JETZT BUCHEN!</button>

    </form>

</div>