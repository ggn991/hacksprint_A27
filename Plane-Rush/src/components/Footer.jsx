import '../styles/Footer.css';

function Footer() {
  return (
    <div className='container-fluid position-fixed bottom-0 start-50 translate-middle-x footer'>
      <div className='row'>
        <div className='col-10'>
          
        </div>
        <div className='col-2'>
          <h1 style={{ color: '#242d3c' }}>
            {' '}
            <a
            
              className='px-2 text-2xl'>
              <i className='fab fa-github'></i> X PLANE
            </a>
          </h1>
        </div>
        <center>
          <div className='col-12'>Innov8tech</div>
        </center>
      </div>
    </div>
  );
}

export default Footer;
