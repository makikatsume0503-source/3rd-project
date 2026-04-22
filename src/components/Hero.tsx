
import { ActionBox } from './ActionBox';
import type { ActionBoxProps } from './ActionBox';

export const Hero: React.FC<ActionBoxProps> = (props) => {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-20">
            {/* Background Image with Elegant Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/60 z-10"></div> {/* Darker overlay for readability */}
                <img
                    src="/assets/hero_lounge_style.png"
                    alt="Elegant Workspace"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 mt-10 md:mt-0">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-6xl mx-auto">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="font-serif font-medium leading-tight mb-6 lg:mb-8 drop-shadow-md tracking-wide text-white">
                            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4 tracking-wider text-slate-200">
                                起業家・経営者・フリーランスのための
                            </span>
                            <span className="block text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black leading-tight text-[#d4af37] drop-shadow-sm">
                                1日で完成させる<br />
                                ホームページ<br />構築講座
                            </span>
                        </h1>
                        <p className="font-serif text-[13px] sm:text-base md:text-2xl mb-8 lg:mb-0 leading-relaxed text-slate-50 drop-shadow-md whitespace-nowrap md:whitespace-normal tracking-tight sm:tracking-normal">
                            スピード × クオリティ。AIで実現する次世代の集客戦略
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full max-w-md mx-auto lg:mr-0 lg:ml-auto">
                        <ActionBox {...props} />
                    </div>
                </div>
            </div>
        </section>
    );
};
