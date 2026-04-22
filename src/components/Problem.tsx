import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export const Problem: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            {/* Solution / Future */}
            {/* Solution / Future */}

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">

                    <h2 className="text-lg md:text-3xl font-bold mt-2 text-slate-800 leading-relaxed md:leading-normal">
                        ホームページを早く作るべきだとわかっている。<br />
                        <span className="block h-4 md:hidden"></span>
                        それでも<br className="block md:hidden" />
                        後回しにしてしまっていませんか？
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
                    {/* Ideal Future */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-green-100 relative z-10"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle size={100} className="text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
                            <CheckCircle size={24} />
                            理想の未来
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></span>
                                <p className="text-slate-600">24時間365日、ホームページが自動で新規顧客を獲得し続ける</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></span>
                                <p className="text-slate-600">価値観の合う「質の高いクライアント」だけを集められる</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></span>
                                <p className="text-slate-600">信頼度・専門性が可視化され、"あなただから"と選ばれる</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Arrow Connector (Desktop) */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-sm border border-slate-100">
                        <ArrowRight className="text-slate-400" />
                    </div>

                    {/* Reality */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-slate-100 rounded-3xl p-8 shadow-inner border border-slate-200 relative z-10"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <AlertCircle size={100} className="text-slate-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-500 mb-6 flex items-center gap-2">
                            <AlertCircle size={24} />
                            後回しにしている現実
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></span>
                                <p className="text-slate-600">「何を書けばいいのか」で手が止まり、一向に進まない</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></span>
                                <p className="text-slate-600">日々の業務に追われ、自分の集客・発信は常に後回し</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2.5"></span>
                                <p className="text-slate-600">自分で作ったが「クオリティが低い」と感じ、公開できずにいる</p>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="mt-20 max-w-4xl mx-auto text-center">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-secondary/30 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-yellow-200 to-secondary"></div>
                        <h3 className="text-2xl md:text-4xl font-serif font-bold text-slate-800 leading-tight">
                            AIを利用すれば<span className="relative inline-block mx-1 isolate">
                                あっという間に
                                <span className="absolute bottom-1 left-0 w-full h-4 bg-yellow-200/80 -z-10 rounded-sm animate-pulse"></span>
                            </span><br />
                            理想のホームページを<br />作成することができます。
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};
