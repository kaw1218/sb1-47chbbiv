import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'case1',
    industry: '製造業',
    company: 'A社',
    course: 'AIリスキリングコース',
    results: '品質検査自動化で年間9,200h削減／ROI 320％達成',
    metrics: [
      { label: '作業時間削減', value: '9,200時間/年' },
      { label: '投資対効果', value: '320%' },
      { label: '不良品検出精度', value: '99.2%' },
    ],
    period: '4ヶ月',
    testimonial: {
      quote: '「AI画像認識による品質検査システムを導入したことで、検査員の負担が大幅に軽減され、より付加価値の高い業務に集中できるようになりました。投資回収も予想より早く実現できています。」',
      author: '製造部長 田中様',
      position: 'A社',
    },
  },
  {
    id: 'case2',
    industry: 'IT・ソフトウェア',
    company: 'B社',
    course: 'AI eラーニング + リスキリング',
    results: 'コード生成自動化で開発効率50％向上／新サービス開発期間6週間短縮',
    metrics: [
      { label: '開発効率向上', value: '50%' },
      { label: '開発期間短縮', value: '6週間' },
      { label: '社員満足度向上', value: '87%' },
    ],
    period: '3ヶ月',
    testimonial: {
      quote: '「全エンジニアがAIコーディングツールを活用できるようになり、単純作業が大幅に削減されました。チーム全体の生産性向上と、より創造的な開発に時間を使えるようになったのが大きな成果です。」',
      author: 'CTO 佐藤様',
      position: 'B社',
    },
  },
  {
    id: 'case3',
    industry: '専門商社',
    company: 'C社',
    course: '生成AI 1DAYマスター講座',
    results: '見積書作成自動化で営業効率70％向上／AI投資方針を即日決議',
    metrics: [
      { label: '営業効率向上', value: '70%' },
      { label: '見積作成時間', value: '90%削減' },
      { label: '意思決定スピード', value: '10倍' },
    ],
    period: '1日',
    testimonial: {
      quote: '「経営陣が一日でAIの可能性を理解し、即座に投資判断ができました。営業チームの見積作成業務が劇的に効率化され、顧客対応により多くの時間を割けるようになりました。」',
      author: '代表取締役 山田様',
      position: 'C社',
    },
  },
  {
    id: 'case4',
    industry: '小売・EC',
    company: 'D社',
    course: 'AIリスキリングコース',
    results: '需要予測AI導入で在庫コスト30％削減／売上機会損失50％減',
    metrics: [
      { label: '在庫コスト削減', value: '30%' },
      { label: '売上機会損失減', value: '50%' },
      { label: '予測精度向上', value: '85%' },
    ],
    period: '5ヶ月',
    testimonial: {
      quote: '「AIによる需要予測システムにより、適切な在庫管理が可能になりました。過剰在庫と品切れの両方が大幅に減少し、キャッシュフローが大幅に改善されました。」',
      author: '商品企画部長 鈴木様',
      position: 'D社',
    },
  },
  {
    id: 'case5',
    industry: 'サービス業',
    company: 'E社',
    course: 'AI eラーニング + 1DAY講座',
    results: '顧客対応AI導入で応答時間60％短縮／顧客満足度15％向上',
    metrics: [
      { label: '応答時間短縮', value: '60%' },
      { label: '顧客満足度向上', value: '15%' },
      { label: '人件費削減', value: '25%' },
    ],
    period: '2ヶ月',
    testimonial: {
      quote: '「AIチャットボットと音声認識システムの導入により、24時間対応が可能になり、顧客満足度が大幅に向上しました。スタッフはより複雑な問題解決に集中できるようになりました。」',
      author: 'カスタマーサービス部長 高橋様',
      position: 'E社',
    },
  },
  {
    id: 'case6',
    industry: '金融・保険',
    company: 'F社',
    course: 'AIリスキリングコース',
    results: '書類審査自動化で処理時間80％短縮／コンプライアンス精度99％達成',
    metrics: [
      { label: '処理時間短縮', value: '80%' },
      { label: 'コンプライアンス精度', value: '99%' },
      { label: '年間コスト削減', value: '3,000万円' },
    ],
    period: '6ヶ月',
    testimonial: {
      quote: '「AI文書解析システムにより、膨大な書類審査業務が自動化され、処理スピードと精度の両方が大幅に向上しました。コンプライアンスリスクも大幅に軽減されています。」',
      author: '審査部長 伊藤様',
      position: 'F社',
    },
  },
];