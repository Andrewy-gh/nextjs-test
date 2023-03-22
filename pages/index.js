import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/product');
  };
  return (
    <>
      <div>
        <header>
          <nav>
            Nav component
            <div>
              <Link href="/store">Store</Link>
            </div>
            <div>
              <Link href="/users">Users</Link>
            </div>
            <div>
              <Link href="/docs">Docs</Link>
            </div>
            <div>
              <Link href="/product">Products</Link>
            </div>
            <button onClick={handleClick}>Go to Products page</button>
          </nav>
        </header>
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
