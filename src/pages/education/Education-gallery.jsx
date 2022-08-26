import './education.css'
import post2 from '../../images/SD.jpg'
import post3 from '../../images/SMP.jpg'
import post4 from '../../images/SMK.png'
import post5 from '../../images/kuliah.jpg'



const Education = () => {
  return (
    <section className="blog">
      <h1 className="headings"></h1>
      <main>
        <article>
          <figure>
            <img src={post2} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <br/>
            <h2>SD Lekong</h2>
            <br />
            <br />
            <p align="justify" >Alamat desa lekong Dusun Lekong Bawa. Kecamatan Alas Barat</p>
            <br />
            <h3><a href="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/f0fc27e2-023c-e111-be43-df9e0171757f">https://esemkasatualas.sch.id/</a></h3>
            
          </div>
        </article>
        <article>
          <figure>
            <img src={post3} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <br />
            <br />
            <h2>SMPN 1 Alas Barat</h2>
            <br />
                <p align="justify">SMP NEGERI 01 ALAS BARAT beralamat di Jalan Raya Lintas Tano No 3, Gontar, Kec. Alas Barat, Kab. Sumbawa, Nusa Tenggara Barat, dengan kode pos 84353. </p>
                <br />
                <h3><a href="https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/b079c2e6-023c-e111-b24b-657b8ccff0ef">https://sekolah.data.</a></h3>

          </div>
        </article>
        <article>
          <figure>
            <img src={post4} alt="semantic versioning" width={100} />
          </figure>
          <div>
            <br />
            <h2>SMKN 1 Alas</h2>
            <br />
                <p align="justify"> Jurusan Teknik Kendaraan ringan </p>
                <p align="justify"> Alamat : Jl. Raya Alas-Sumbawa, Labuhan Alas, Alas, 84353, Labuhan Alas, Kec. Alas, Kabupaten Sumbawa, Nusa Tenggara Bar. 84353 </p>
                <br />
                <h3><a href="https://esemkasatualas.sch.id/">https://esemkasatualas.sch.id/</a></h3>
          </div>
        </article>
        <article>
          <figure>
            <img src={post5} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <br />
            <h2>Universitas Teknologi Sumbawa</h2>
            <br />
                <p align="justify"> Jurusan Teknik Mesin, Fakultas Rekayasa Sistem</p>
                <p align="justify"> Alamat Jl. Raya Olat Maras, Batu Alang, Moyo Hulu, Sumbawa Regency, NTB. 84371</p>
                <br />
                <h3><a href="https://uts.ac.id/en/welcome/">https://uts.ac.id/en/welcome/</a></h3>
                <h3><a href="https://frs.uts.ac.id/">https://frs.uts.ac.id/</a></h3>

          </div>
        </article>
      </main>
    </section>
  )
}



export default Education