export default function Overview() {
  return (
    <div className="bg-white py-20" style={{ backgroundImage: `url(../assets/images/beeing.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">AR-Hive</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">A immersive Augmented Reality experience</p>
        <div className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <ul className="links">
            <li>
              <a className="link" href="#">Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
