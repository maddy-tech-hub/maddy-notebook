import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const Home = () => { return (<p>Hello Welcome to <b>Home</b> Page.</p>) }
const About = () => { return (<p>Hello welcome to <b>About</b> page.</p>) }

function Routers() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to='/home'>Home</Link>&nbsp;&nbsp;
          <Link to='/about'>About</Link>
        </div>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default Routers