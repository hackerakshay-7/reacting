import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Download Now
                            <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://www.google.com/imgres?q=4k%20doodle%20images&imgurl=https%3A%2F%2F4kwallpapers.com%2Fimages%2Fwalls%2Fthumbs_2t%2F4407.jpg&imgrefurl=https%3A%2F%2F4kwallpapers.com%2Fdoodle&docid=6gRPP-vjWtsVAM&tbnid=ByHPG0HlKy6j8M&vet=12ahUKEwjGyOX_hoqYAxVxwjgGHTr1N2wQnPAOegUI4AUQAA..i&w=800&h=450&hcb=2&ved=2ahUKEwjGyOX_hoqYAxVxwjgGHTr1N2wQnPAOegUI4AUQAA" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://www.google.com/imgres?q=4k%20doodle%20images&imgurl=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F805%2F796%2F1020%2Fexplosion-monitor-another-body-wallpaper-preview.jpg&imgrefurl=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Ddoodle&docid=G5N40MyyTqXgVM&tbnid=PKbWpbD0FH1PiM&vet=12ahUKEwialfu9h4qYAxVhxTgGHXYCIeI4ChCc8A56BQiDAxAA..i&w=728&h=546&hcb=2&ved=2ahUKEwialfu9h4qYAxVhxTgGHXYCIeI4ChCc8A56BQiDAxAA" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}