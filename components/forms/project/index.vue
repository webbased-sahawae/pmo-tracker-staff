<template>
  <div class="flex flex-col items-center w-[100vw]">
    <div class="flex gap-2 flex-col md:w-[50vw]">
      <div class="flex flex-col">
        <label>Nama Aktifitas</label><input placeholder="edit me" />
      </div>
      <div class="flex flex-col">
        <label>Tempat</label><input placeholder="edit me" />
      </div>
      <div class="flex flex-col">
        <label>Tanggal</label><input type="date" placeholder="edit me" />
      </div>
      <!-- <div class="flex flex-col">
        <div>
          <label>Program terkait</label>
        </div>
        <select name="progra," id="progra,">
          <option value="programID">Program 1</option>
          <option value="programID">Program 2</option>
          <option value="programID">Program 3</option>
        </select>
      </div> -->
      <div class="flex flex-col">
        <div>
          <label>Jenis Aktifitas</label>
        </div>
        <select name="project" id="project">
          <option value="seminar">Seminar</option>
          <option value="training">Training</option>
          <option value="rapat">Rapat</option>
          <option value="forum">Forum</option>
          <option value="expo">Expo</option>
          <option value="undangan">Undangan</option>
          <option value="festival">Festival</option>
          <option value="event">Event</option>
          <option value="fgd">FGD</option>
        </select>
      </div>
      <div class="flex flex-col">
        <label>Kehadiran</label
        ><input placeholder="Auto complete and will be dynamic" />
      </div>

      <div class="flex flex-col">
        <label>Agenda</label><textarea placeholder="edit me" />
      </div>
      <div class="flex flex-col">
        <label>Hasil</label><textarea placeholder="edit me" />
      </div>
      <div class="flex flex-col primeBox p-2">
        <label>Action</label>

        <div class="primeBox p-2">
          <div class="flex flex-col">
            <label>Nama Aktifitas</label><input placeholder="edit me" />
          </div>
          <div class="flex flex-col">
            <div>
              <label>Jenis Aktifitas</label>
            </div>
            <select name="project" id="project">
              <option value="seminar">Seminar</option>
              <option value="training">Training</option>
              <option value="rapat">Rapat</option>
              <option value="forum">Forum</option>
              <option value="expo">Expo</option>
              <option value="undangan">Undangan</option>
              <option value="festival">Festival</option>
              <option value="event">Event</option>
              <option value="fgd">FGD</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label>Tempat</label><input placeholder="edit me" />
          </div>
          <div class="flex flex-col">
            <label>Tanggal</label><input type="date" placeholder="edit me" />
          </div>
        </div>
      </div>
      <!-- <input placeholder="edit me" onchange="(e)=>{testKey()}" /> -->

      <!-- {{ color.warna }}
      <button @click="color.warna.value = 'red'">coba</button> -->
    </div>
    <!-- <input
      type="text"
      list="languages"
      placeholder="Pick a programming language.."
    />

    <datalist id="languages">
      <option value="PHP" />
      <option value="C++" />
      <option value="Java" />
      <option value="Ruby" />
      <option value="Python" />
      <option value="Go" />
      <option value="Perl" />
      <option value="Erlang" />
    </datalist> -->
  </div>
</template>
<script setup></script>
