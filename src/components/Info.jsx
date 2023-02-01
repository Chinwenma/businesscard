import profile from '../images/profile.jpeg';
export default function Info() {
    return (
        <div className="flex flex-col text-center justify-between items-center">
            <div> <img src={profile} alt="" className="rounded-full max-w-full h-auto mt-6" /></div>
            <h2 className="max-w-md text-2xl font-normal  text-center text-white md:text-5xl md:text-left">Okorie Chinwenma</h2>
            <p className='text-white text-2xl font-normal'>Web Developer</p>
            <button className='my-10'>
                <a href="youtube.com"className="p-3 px-6 pt-2 text-black bg-white rounded-sm baseline hover:bg-slate-100 hover: text-black">Get Started</a>
                    <a href="youtube.com"className="p-3 px-6 pt-2 ml-4 text-white bg-blue-500 rounded-sm baseline hover:bg-slate-100 hover: text-black">Get
                    Started</a>
            </button>
           
        </div>
    )
}