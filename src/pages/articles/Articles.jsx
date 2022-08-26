import './articles.css'

import post2 from '../../images/post2.png'
import post3 from '../../images/post3.png'

const Articles = () => {
  return (
    <section className="blog">
      <h1 className="headings"></h1>
      <main>
        <article>
          <figure>
            <img src={post2} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <h2>Kepribadian</h2>
            <p align="justify" >Kepribadian yang saya miliki yaitu lebih ke menghargai waktu, mengutamakan tugas yang diberikan dan menyelesaikan tugas yang diberikan, mengatur rencana kerja agar pekerjaan lebih teratur serta lebih maksimal dalam mengerjakan tugas yang menumpuk, namun hal yang paling saya tidak sukai yaitu menunda-nunda segala bentuk pekerjaan</p>
          </div>
        </article>
        <article>
          <figure>
            <img src={post3} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <h2>Prestasi</h2>
                <p align="justify"> pernah menjuarai Pertandingan karate tingkat provinsi dan kabupaten</p>
                <p align="justify"> Mengikuti Plantara Nasional (Pramuka Satuan Karya bahari)</p>
                <p align="justify"> Menjadi Instruktur muda Satuan Karya Bahari</p>
                <p align="justify"> Rangking 1 dari kelas 1 SMK sampai kelas 3 SMK</p>
                <p align="justify"> juara 2 umum perlombaan Pramuka Tingkat kabupaten</p>

          </div>
        </article>
      </main>
    </section>
  )
}

export default Articles