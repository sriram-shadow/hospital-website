import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function About() {
  return (
    <div className="about" >
      <Header />
      <main className="about-content" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Aravind's first clinic</h1>
        <p>The problem of avoidable blindness rapidly escalating remained a major cause of concern in the Indian healthcare scenario. In a developing country like India, the government alone cannot meet the health needs of all owing to a number of challenges like growing population, inadequate infrastructure, low per capita income, aging population, diseases in epidemic proportions and illiteracy.<br /><br />

Realizing this, Dr. Venkataswamy wished to establish an alternate health care model that could supplement the efforts of the government and also be self-supporting. Following his retirement at age 58 in 1976, he established the GOVEL Trust under which Aravind Eye Hospitals were founded.<br /><br />

The hospitals are named after Sri Aurobindo, one of the 20th century’s most revered spiritual leaders. In essence, Sri Aurobindo’s teachings insist on transcendence into a heightened state of consciousness and becoming better instruments for the divine force to work through.<br /><br />

In an eleven bed hospital manned by 4 medical officers, Dr.V saw the potential for what is today, one of the largest facilities in the world for eye care. Over the years, this organisation has evolved into a sophisticated system dedicated to compassionate service for sight.</p>
        <h2>Aravind Model</h2>
        <p>Aravind Eye Care System is a comprehensive eye care delivery system that provides high quality, compassionate and affordable eye care to all. The Aravind model of eye care delivery is based on the following tenets:<br /><br />

1. High quality, compassionate and affordable eye care to all<br />
2. Large volume, high quality, efficient and cost effective service<br />
3. Cross subsidisation of services<br />
4. Self-sustainability through efficient management and judicious use of resources<br />
5. Community outreach programmes to reach the underserved<br />
6. Use of appropriate technology and innovation to enhance efficiency and reduce costs<br />
7. Training and research to improve the quality of eye care delivery<br /><br /> </p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
