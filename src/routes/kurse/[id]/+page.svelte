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