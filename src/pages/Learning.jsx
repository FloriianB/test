/*
export default function Learning() {
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#333', background: '#fff', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
      <header style={{ padding: '20px 40px', borderBottom: '1px solid #e0e0e0', transition: 'all 0.3s' }}>
        <h1 style={{ margin: 0, fontSize: '24px', color: '#555', transition: 'all 0.3s' }}>Learning</h1>
      </header>
      <main style={{ padding: '40px', transition: 'all 0.3s' }}>
        <section className="intro" style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#555', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px', transition: 'all 0.5s' }}>
            Introduction to AI, Deep Learning, and Neural Networks</h2>
          <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777', transition: 'all 0.5s' }}>
            In the fascinating world of beekeeping, technology is playing an increasingly vital role.
            Artificial Intelligence (AI), Deep Learning, and Neural Networks are no longer terms 
            confined to the realms of computer science. They are becoming essential tools for modern beekeepers.
            But what do these terms mean, and how can they be applied to beekeeping? Let's dive in!
          </p>
        </section>

        </main>
        <section className="intro" style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#555', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px', transition: 'all 0.5s' }}
          >Artificial Intelligence (AI)</h2>
          <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777', transition: 'all 0.5s' }}> 
          AI is the simulation of human intelligence in machines. In beekeeping, 
          AI can be used to analyze data from hives, predict bee behavior, and even detect diseases. 
          It's like having a virtual bee expert that can assist you in making informed decisions.
           
           </p>
        </section>
       
        <section className="algorithms">
          <div className="algorithm" style={{ marginBottom: '40px', transition: 'all 0.3s', padding: '20px' }}
               onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
               onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <h2 style={{ color: '#555', fontSize: '18px' }}> 
            Neural Networks</h2>
            <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777' }}>
            Neural Networks are the building blocks of Deep Learning. 
            They are designed to recognize patterns and interpret data by 
            mimicking the way the human brain works.
              For beekeepers, Neural Networks can be used to recognize patterns in bee behavior, 
              hive health, and environmental factors.
              This recognition can lead to early detection of problems 
              such as diseases or infestations, allowing for timely interventions.
            </p>
          </div>
          </section>
          
          <main style={{ padding: '40px', transition: 'all 0.3s' }}>
          <section className="algorithms" style={{ marginBottom: '60px' }}>
            <h2 style={{ color: '#555', fontSize: '20px', borderBottom: '2px solid #e0e0e0', paddingBottom: '10px', transition: 'all 0.5s' }}>
            How Can You Benefit?</h2>
            <p style={{ lineHeight: '1.7', marginTop: '20px', fontSize: '16px', color: '#777', transition: 'all 0.5s' }}>
            Whether you're a seasoned beekeeper or just starting, understanding and utilizing
            these technologies can revolutionize the way you manage your hives. 
            From enhancing productivity to protecting the health of your bees, the applications are vast and promising.
            Here at [Your Platform Name], we offer courses and resources tailored specifically for beekeepers. 
            Learn how to harness the power of AI, Deep Learning, and Neural Networks 
            to take your beekeeping to the next level.

            Join us on this exciting journey into the future of beekeeping. 
            Click here to explore our courses and get started.
            </p>
          </section>

      
        
      </main>


      <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 40px', borderTop: '1px solid #e0e0e0', transition: 'all 0.3s' }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#999', transition: 'all 0.3s' }}>© 2023 KI-Pilot</p>
      </footer>
      <style>
        {`
          @media (max-width: 768px) {
            main {
              padding: 20px;
            }
            header, footer {
              padding: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};
*/

export default function Learning() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    {[1, 2, 3].map((item, index) => (
      
      <div key={index}
      style={{
        width: '100%',
        height: '41em',
        flexShrink: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10em',
      }}
    >
      <div
        style={{
          backgroundColor: '#f1f1f1',
          margin: '1em',
          padding: '3em',
          fontSize: '30px',
          width: '365px',
          height: '212px',
          textAlign: 'center'
          
        }}
      >
        Deep Learning {item}
      </div>
      <button
        style={{
          width: '130px',
          height: '38px',
          flexShrink: 0,
          color: '#3D6A52',
          backgroundColor: '#FFF',
          textAlign: 'center',
          fontFamily: 'Roboto Slab',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: 'normal',
        }}
      >
        
          Read More
        </button>
      </div>
    ))}
  </div>
  );
};