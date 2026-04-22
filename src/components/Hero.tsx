import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import type { ActionBoxProps } from './ActionBox';

export const Hero: React.FC<ActionBoxProps> = ({
    price = "55,000",
    priceLabel = "モニター価格",
    paymentUrl = "https://buy.stripe.com/aFa9AV7dY7fW7vLbyNbV605"
}) => {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0c1829]">

            {/* Photo — top on mobile, right on desktop */}
            <div className="order-first lg:order-last w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[48%] h-56 sm:h-72 lg:h-full relative overflow-hidden flex-shrink-0">
                {/* SP: hero-sp.png / PC: hero-pc.png（未追加の場合は hero_lounge_style.png で表示） */}
                <img
                    src="/assets/hero-sp.png"
                    alt="Professional workspace"
                    className="w-full h-full object-cover object-center lg:hidden"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/assets/hero_lounge_style.png'; }}
                />
                <img
                    src="/assets/hero-pc.png"
                    alt="Professional workspace"
                    className="w-full h-full object-cover object-center hidden lg:block"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/assets/hero_lounge_style.png'; }}
                />
                {/* Mobile: fade bottom into navy */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1829]/20 to-[#0c1829] lg:hidden" />
                {/* Desktop: diagonal mask on left edge of photo */}
                <div
                    className="hidden lg:block absolute inset-0 bg-[#0c1829]"
                    style={{ clipPath: 'polygon(0 0, 14% 0, 0 100%)' }}
                />
            </div>

            {/* Desktop gold diagonal line */}
            <div
                className="hidden lg:block absolute top-0 z-20 w-[2px] h-full bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/80 to-[#d4af37]/0"
                style={{ left: 'calc(52% - 7%)' }}
            />

            {/* Content — left on desktop */}
            <div className="relative z-10 w-full lg:w-[55%] px-8 md:px-14 lg:px-16 xl:px-20 py-10 lg:py-20 flex flex-col justify-center">

                {/* Eyebrow */}
                <p className="text-slate-300 text-sm md:text-base font-serif tracking-widest mb-3">
                    起業家・経営者・フリーランスのための
                </p>

                {/* Decorative rule */}
                <div className="flex items-center gap-2 mb-6">
                    <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#d4af37]/60" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
                    <div className="h-px w-6 bg-[#d4af37]/60" />
                </div>

                {/* Main title */}
                <h1 className="font-serif font-bold text-[#d4af37] leading-[1.15] mb-5">
                    <span className="block text-[2.4rem] sm:text-5xl lg:text-5xl xl:text-6xl">1日で完成させる</span>
                    <span className="block text-[2.4rem] sm:text-5xl lg:text-5xl xl:text-6xl">ホームページ構築講座</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-300 text-sm md:text-base font-serif tracking-wide mb-5">
                    スピード×クオリティ。AIで実現する次世代の集客戦略
                </p>

                {/* Badge */}
                <div className="inline-flex mb-5 w-fit">
                    <div className="relative inline-flex items-center gap-3 px-6 py-2 border border-[#d4af37]/60">
                        <span className="absolute -left-[7px] top-1/2 -translate-y-1/2 text-[#d4af37] text-xs">✦</span>
                        <span className="text-white font-serif text-sm md:text-base tracking-widest">1ヶ月のサポート付き</span>
                        <span className="absolute -right-[7px] top-1/2 -translate-y-1/2 text-[#d4af37] text-xs">✦</span>
                    </div>
                </div>

                {/* Description with left border */}
                <div className="border-l-2 border-[#d4af37] pl-4 mb-6">
                    <p className="text-white font-serif text-base md:text-lg leading-relaxed">
                        AIで最短1日、<br />
                        集客できるホームページを自分の手で構築する
                    </p>
                </div>

                {/* Price */}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-5">
                    <span className="px-3 py-1 border border-[#d4af37]/60 text-[#d4af37] text-sm font-serif tracking-wider">
                        {priceLabel}
                    </span>
                    <span className="text-[#d4af37] font-bold font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                        {price}
                    </span>
                    <span className="text-white font-serif text-lg">円</span>
                    <span className="text-slate-400 text-sm">（税込）</span>
                </div>

                {/* Info bar */}
                <div className="border border-[#d4af37]/30 bg-white/5 p-4 mb-7">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
                        <div className="flex items-center gap-2 text-slate-200 text-sm font-serif flex-1">
                            <Clock className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                            <span>所要時間：9:00-14:00 <span className="text-xs text-slate-400">（途中休憩あり）</span></span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-[#d4af37]/30 mx-4" />
                        <div className="flex items-center gap-2 text-slate-200 text-sm font-serif flex-1">
                            <Calendar className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                            <span>開催日：日程調整の上決定</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.a
                    href={paymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-[#d4af37] text-[#0c1829] font-bold font-serif text-lg shadow-lg hover:bg-[#e0c060] transition-colors group"
                >
                    <span>お申し込みはこちら</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <p className="text-xs text-slate-500 mt-3 font-serif">
                    ※ボタンをクリックすると決済画面に移動します。
                </p>
            </div>
        </section>
    );
};
