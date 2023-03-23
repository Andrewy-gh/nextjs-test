import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div>
        <header></header>
      </div>
      <main>
        {/* Hero */}
        <section>
          <h1>Welcome</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            quod?
          </p>
          <button>Shop now</button>
        </section>

        {/* Featured */}
        <section>
          <h2>Featured Collections</h2>
          <div className="grid-cols-3">
            <div>
              <div>
                <Image
                  src="/images/annie-spratt-ncQ2sguVlgo-unsplash.jpg"
                  width={100}
                  height={100}
                  alt=""
                />
                <div>
                  <p>Succulents</p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/alyssa-strohmann-vkpKUtMmMQQ-unsplash.jpg"
                  width={100}
                  height={100}
                  alt=""
                />
                <div>
                  <p>Planters</p>
                </div>
              </div>
              <div>
                <Image
                  src="/images/charlesdeluvio-OIRoFbbQa3E-unsplash.jpg"
                  width={100}
                  height={100}
                  alt=""
                />
                <div>
                  <p>Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section>
          <div className="text-center">
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
              illo quae non esse tempora impedit perspiciatis animi corporis
              corrupti?
            </h2>
          </div>
        </section>

        <section>
          <div>
            {/* <video autoplay loop>
              <source src="./assets/video.mp4" type="video/mp4" />
            </video> */}
          </div>
          <div>
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aliquid fuga quos asperiores exercitationem obcaecati dolorem
              mollitia ad tempora voluptatibus.
            </p>
          </div>
        </section>
      </main>

      <div>
        <footer>Footer component</footer>
      </div>
    </>
  );
}
