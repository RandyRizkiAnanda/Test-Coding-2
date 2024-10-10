// app/page.tsx
"use client"; // Menandai ini sebagai Client Component

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import { TweenMax } from 'gsap';

export default function Home() {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Buat scene untuk efek scroll
    new ScrollMagic.Scene({
      triggerElement: '#trigger', // Elemen pemicu
      duration: 200, // Durasi efek
      triggerHook: 0.5, // Hook pemicu di tengah viewport
    })
      .on('enter', () => {
        // Tween efek untuk fade in menggunakan GSAP
        TweenMax.to('#animate', 1, { opacity: 1 });
      })
      .addTo(controller);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Innovative Solutions for Animals</title>
        <meta name="description" content="Clone of isa-charity website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li><a href="#about">About</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1 className={styles.title}>Isa Charity</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Make a Difference Today</h2>
          <p>Join us in helping those in need.</p>
          <button>Get Involved</button>
        </section>

        <section id="about" className={styles.about}>
          <h2>About Us</h2>
          <p>
            We are dedicated to helping communities in need through various outreach programs.
          </p>
        </section>

        <section id="donate" className={styles.donate}>
          <h2>Donate Now</h2>
          <p>Your contribution can make a difference!</p>
          <button>Donate</button>
        </section>

        <div id="trigger" style={{ height: '200px', background: '#f0f0f0' }}>
          Scroll to trigger animation
        </div>
        <div id="animate" style={{ opacity: 0, transition: 'opacity 0.5s' }}>
          This will fade in on scroll!
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Isa Charity. All rights reserved.</p>
      </footer>
    </div>
  );
}
