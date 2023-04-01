<script>
    import { page } from '$app/stores';
    export let data;

</script>



<div class="container">

    <h1>{ data.name }</h1>
    <!-- <a style={"background-color: #546e7a; border:none"} role="button" href=".">Kursplan (PDF)</a> -->
    <p>{ data.beschreibung }</p>


    <h2>Kursübersicht</h2>

  <table>
    <thead>
      <tr>
        <th scope="col">Modul</th>
        <th scope="col">Freitag</th>
        <th scope="col">Samstag</th>
        <th scope="col">So</th>
      </tr>
    </thead>
    <tbody>
        {#each data.rows as rows, i}
            <tr>
                <td>{ i +1 }</td>
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


    <form action="?/buchung" method="POST">

        <!-- <label for="kurs">Kurs</label>

        <select id="kurs" name="kurs" required>
          <option>{ data.name }</option>
          <option>Python DevOps</option>
        </select> -->

        <!-- <label for="date">Wählen Sie ein Kursdatum
          <input type="date" id="date" name="date">
        </label> -->
              
        <button type="submit" id="checkout-button">jetzt buchen</button>

      </form>
</div>