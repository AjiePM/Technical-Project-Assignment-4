import React from 'react'
import post2 from '../../images/projek1.png'
import post3 from '../../images/projek2.png'
import post4 from '../../images/projek3.png'
import post5 from '../../images/projek4.png'

const Project = () => {
  return (
    <section className="blog">
      <h1 className="headings"></h1>
      <main>
        <article>
          <figure>
            <img src={post2} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <br />
            <h2>Projek Pertama </h2>
            <p align="center" > Projek dasar Membuat personal web menggunakan HTML dan CSS</p>
            <br />
            <h3><a href="https://ajiepm-arithmetic-51661d.netlify.app/">https://ajiepm-arithmetic-51661d.netlify.app/</a></h3>
            
          </div>
        </article>
        <article>
          <figure>
            <img src={post3} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <br />
            <h2>Projek Kedua</h2>
                <p align="center">Projek kedua Membuat Kalkulator BMI dengan menggunakan HTML CSS dan JavaScript </p>
                <br />
                <h3><a href="https://ajietpa2lambent-taffy-b068f5.netlify.app/">https://ajietpa2lambent-taffy-b068f5.netlify.app/</a></h3>

          </div>
        </article>
        <article>
          <figure>
            <img src={post4} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <br />
            <h2>Projek Ketiga</h2>
                <p align="center"> Buatlah aplikasi website menampilkan list Movie menggunakan data external API TMDB API menggunakan HTML CSS dan JavaScript </p>
                <br />
                <h3><a href="https://aesthetic-chimera-d933c3ajiepm.netlify.app">https://aesthetic-chimera-d933c3ajiepm.netlify.app</a></h3>
          </div>
        </article>
        <article>
          <figure>
            <img src={post5} alt="semantic versioning" width={10} />
          </figure>
          <div>
            <br />
            <h2>Projek Kelompok</h2>
            <br />
                <p align="center">membuat website penjualan Sayur dan Buah-buahan agar Terra dapat membantu calon konsumennya membeli Sayur dan Buah dengan mudah, menggunakan HTML, CSS, dan JavaScript </p>
                
                <br />
                <h3><a href="https://tangerine-cucurucho-104422pm.netlify.app/">https://tangerine-cucurucho-104422pm.netlify.app/</a></h3>
                

          </div>
        </article>
      </main>
    </section>
  )
}

export default Project