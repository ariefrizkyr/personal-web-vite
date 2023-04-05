import { React, useState } from 'react'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
	const [open, setOpen] = useState(false);

	const openToggle = () => {
		setOpen(!open);
	}

  return (
	<>
	<nav className="bg-gray-100 md:bg-white">
		<div className="max-w-6xl mx-auto px-4 py-5 md:py-8">
			<div className="flex justify-between space-x-4">
				<div className="items-center">
					<Link to="/"><img src={Logo} className="w-6 h-6 md:w-8 md:h-8" alt="Arief R Ramadhan Logo"/></Link>
				</div>

				<div className="hidden md:flex items-center space-x-1">
					<Link to="/" className="px-3 text-gray-700 hover:text-gray-900">Home</Link>
					<Link to="/about" className="px-3 text-gray-700 hover:text-gray-900">About</Link>
					<a href="https://medium.com/@ariefrizkyr" target="_blank" rel="noreferrer" className="px-3 text-gray-700 hover:text-gray-900">Blog</a>
				</div>

				<div className="md:hidden flex justify-between items-center">
					<button onClick={openToggle}>
						<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div className={`${!open && 'hidden'} md:hidden`} >
			<Link to="/" onClick={openToggle} className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
			<Link to="/about" onClick={openToggle} className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
			<a href="https://medium.com/@ariefrizkyr" target="_blank" rel="noreferrer" className="block py-2 px-4 text-sm hover:bg-gray-200">Blog</a>
		</div>
	</nav>
	</>
  )
}

export default Header