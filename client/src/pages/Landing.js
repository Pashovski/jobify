import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/Testing'
import { Logo } from '../components'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
