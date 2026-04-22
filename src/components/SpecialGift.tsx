import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, HeadphonesIcon } from 'lucide-react';

export const SpecialGift: React.FC = () => {
    return (
        <section className="py-24 bg-[#0c1829] text-white relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-5 py-1.5 border border-[#d4af37]/60 text-[#d4af37] text-sm font-serif tracking-widest mb-6">
                        期間限定
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        受講者限定 <span className="text-[#d4af37]">3大特典</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"></div>
                    <p className="text-slate-300 max-w-xl mx-auto text-base leading-relaxed font-serif">
                        AIへの指示が曖昧なままでは平凡な出力しか得られません。<br />
                        この3つがあれば、成約率の高いホームページを最短で完成できます。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <GiftCard
                        delay={0}
                        icon={<MessageCircle className="w-7 h-7 text-[#d4af37]" />}
                        label="特典 1"
                        title={<>【プロライター監修】<br />強み引き出しヒアリングシート</>}
                        description="プロのライターが実際に使う「強み引き出し質問シート」をAI用に最適化。これに沿って答えるだけで、AIが高精度なライティングツールへと変わります。"
                    />
                    <GiftCard
                        delay={0.15}
                        icon={<FileText className="w-7 h-7 text-[#d4af37]" />}
                        label="特典 2"
                        title="即使えるAIプロンプト集"
                        description="30分でホームページの骨組みを完成させる具体的な指示書（プロンプト）。コピペするだけで即実践投入できる実践的なコレクションです。"
                    />
                    <GiftCard
                        delay={0.3}
                        icon={<HeadphonesIcon className="w-7 h-7 text-[#d4af37]" />}
                        label="特典 3"
                        title={<>1ヶ月間<br />チャットサポート</>}
                        description="受講後も安心の1ヶ月間フォローアップ。実践する中で生まれた疑問・詰まった箇所を、チャットでダイレクトに質問できます。"
                    />
                </div>
            </div>
        </section>
    );
};

const GiftCard = ({ delay, icon, label, title, description }: {
    delay: number;
    icon: React.ReactNode;
    label: string;
    title: React.ReactNode;
    description: string;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="h-full"
    >
        <div className="h-full bg-white/5 border border-[#d4af37]/20 rounded-xl p-8 flex flex-col relative overflow-hidden hover:border-[#d4af37]/50 transition-colors duration-500 group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

            <div className="mb-5 flex justify-center">
                <div className="w-14 h-14 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                    {icon}
                </div>
            </div>

            <div className="text-center flex flex-col flex-1">
                <span className="text-[#d4af37]/70 font-serif tracking-widest text-xs mb-3 block">{label}</span>
                <h3 className="text-lg font-serif text-white mb-4 leading-snug">
                    {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                    {description}
                </p>
            </div>
        </div>
    </motion.div>
);
