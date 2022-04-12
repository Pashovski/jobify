import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby cornhole health goth pabst, wolf kale chips thundercats
            fixie. Banjo artisan craft beer single-origin coffee trust fund,
            chambray kogi kickstarter affogato raw denim. Drinking vinegar
            cliche sartorial, kinfolk offal tumeric leggings chillwave
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
