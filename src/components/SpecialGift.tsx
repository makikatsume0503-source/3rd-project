import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageCircle } from 'lucide-react';

export const SpecialGift: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-6 py-2 rounded-full bg-secondary text-primary font-bold text-xl mb-8 tracking-wider shadow-lg transform hover:scale-105 transition-transform duration-300">
                        期間限定
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        受講者限定<span className="text-secondary">「3大特典」</span><br />
                        プレゼント
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        AIは優秀ですが、指示が抽象的だと<br />
                        平凡な答えしか返ってきません。<br /><br />
                        このテンプレを使えば、<br />
                        あなたの心の奥にある<br />
                        「本当に伝えたいこと」をAIに正しく伝え、<br />
                        想いのこもったホームページを<br className="block md:hidden" />
                        作成できます。
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Gift 1 */}
                    <GiftCard
                        delay={0}
                        icon={<MessageCircle className="w-8 h-8 text-secondary" />}
                        label="プレゼント１"
                        title={<>【プロライター監修】<br />ヒアリングシート</>}
                        description="プロのライターが実際に行っている「強み引き出し質問シート」をAI用に最適化。これに沿って答えるだけで、AIがあなたの分身へと進化します。"
                    />

                    {/* Gift 2 */}
                    <GiftCard
                        delay={0.2}
                        icon={<FileText className="w-8 h-8 text-secondary" />}
                        label="プレゼント２"
                        title="AIプロンプト集"
                        description="30分でホームページの骨組みを作るための具体的な指示書（プロンプト）。迷わずコピペして使える実践的なコレクションです。"
                    />

                    {/* Gift 3 */}
                    <GiftCard
                        delay={0.4}
                        icon={<MessageCircle className="w-8 h-8 text-secondary" />}
                        label="プレゼント３"
                        title={<>1ヶ月間<br />チャットサポート</>}
                        description="講座受講後も安心の1ヶ月間フォローアップ。実践の中で生まれた疑問や不明点を、チャットで気軽に質問できます。"
                    />
                </div>
            </div>
        </section>
    );
};

const GiftCard = ({ delay, icon, label, title, description }: { delay: number, icon: React.ReactNode, label: string, title: React.ReactNode, description: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="h-full"
    >
        <div className={`h-full bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-lg p-1 overflow-hidden hover:border-secondary/50 transition-colors duration-500 group`}>
            <div className="h-full bg-slate-900/40 rounded-[4px] p-8 flex flex-col relative overflow-hidden">
                {/* Elegant Top Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/70 to-transparent"></div>

                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full border border-secondary/30 bg-secondary/5 flex items-center justify-center shadow-[0_0_15px_rgba(197,165,114,0.1)] group-hover:bg-secondary/10 group-hover:scale-105 transition-all duration-500">
                        {icon}
                    </div>
                </div>

                <div className="text-center">
                    <span className="text-secondary/80 font-serif tracking-widest text-xs mb-3 block uppercase border-b border-secondary/20 inline-block pb-1 px-2 mx-auto">{label}</span>
                    <h3 className="text-xl font-serif text-white mb-4 leading-snug min-h-[3.5rem] flex items-center justify-center">
                        {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
);
