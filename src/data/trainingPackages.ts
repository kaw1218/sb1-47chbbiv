import { TrainingPackage } from '../types';

export const trainingPackages: TrainingPackage[] = [
  {
    id: 'elearning',
    title: 'AI eラーニングコース',
    description: 'AIリテラシーの底上げ',
    targetAudience: '全社員',
    hours: '12h',
    price: 69800,
    discountedPrice: 17450,
    features: [
      '誰でも分かる生成AI入門（動画5章／10h）',
      '最新ツール紹介＋管理方法（2h）',
      '業務活用演習：文章生成、表計算、マーケ、自動議事録',
      'ライブQ&A & テスト（学習定着率チェック）',
      '学習管理ダッシュボード（人事・管理職が一括モニタリング）',
    ],
    benefits: [
      {
        title: '週次報告書作成時間',
        value: '平均‐40％',
      },
      {
        title: '社内マニュアル自動生成',
        value: '年間120h削減',
      },
    ],
  },
  {
    id: 'reskilling',
    title: 'AIリスキリングコース',
    description: '部門単位で業務に実装',
    targetAudience: '部門リーダー・担当者',
    hours: '18h + 伴走',
    price: 248000,
    discountedPrice: 62000,
    features: [
      'スタートアップMTG：現場ヒアリング・KPI設定',
      '基礎10h＋実務演習：部門課題をテーマにPoC',
      'ワークショップ4回／6h：プロンプト改善・自動化設計',
      '定例活用MTG（月1）＆チャットサポート：定着フォロー',
      'オンラインサロン：他社成功事例 & 最新アップデート共有',
    ],
    benefits: [
      {
        title: '見積作成自動化',
        value: '作業時間70％削減',
      },
      {
        title: 'マーケキャンペーン案出しスピード',
        value: '3倍',
      },
    ],
    isPopular: true,
  },
  {
    id: 'oneday',
    title: '生成AI 1DAYマスター講座',
    description: '経営判断を加速',
    targetAudience: '経営者・役員',
    hours: '8h',
    price: 79800,
    discountedPrice: null,
    features: [
      'AM：AIロードマップ／生成AI基礎／活用ケース100選',
      'PM：画像生成・GPTs拡張／投資判断シミュレーション／Q&A',
      '無料特典：翌月まで経営相談チャット開放',
    ],
    benefits: [
      {
        title: 'AI投資判断',
        value: '即時決議',
      },
      {
        title: 'AI活用イメージ',
        value: '具体化',
      },
    ],
  },
];