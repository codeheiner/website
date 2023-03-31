<script>
    import { page } from '$app/stores';
    export let data;

</script>



<div class="container">
    <nav aria-label="breadcrumb">
        <ul>
          <li><a href="../">Home</a></li>
          <!-- <li>{ $page.params.id }</li> -->
        </ul>
    </nav>
    <h2>{ data.name }</h2>
    <!-- <a style={"background-color: #546e7a; border:none"} role="button" href=".">Kursplan (PDF)</a> -->
    <p>{ data.beschreibung }</p>


    <h3>Kursübersicht</h3>
    <p>
      Sinnvolle Gliederung und ausreichende Pausen sind wichtig. 
      Darum trifft sich der Kurs nach Absprache an drei oder an vier Tagen.
    </p>

  <table>
    <thead>
      <tr>
        <th scope="col">Modul</th>
        <th scope="col">Do</th>
        <th scope="col">Fr</th>
        <th scope="col">Sa</th>
        <th scope="col">So</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Datentypen</td>
        <td>Klassen</td>
        <td>Nebenläufigkeit</td>
        <td>Handwerkszeug</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Funktionen</td>
        <td>Errors</td>
        <td>Effizientes Python</td>
        <td>Softskills</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Schleifen</td>
        <td>Fehlersuche</td>
        <td>Asyncio</td>
        <td>Projekt</td>
      </tr>
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