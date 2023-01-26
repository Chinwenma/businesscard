import profile from '../images/profile.jpeg';
export default function Info() {
    return (
        <div className="flex flex-center justify-between items-center">
            <div> <img src={profile} alt="" /> </div>

            <h2 className="max-w-md text-2xl font-normal  text-center text-white md:text-5xl md:text-left">Okorie Chinwenma</h2>
        </div>
    )
}