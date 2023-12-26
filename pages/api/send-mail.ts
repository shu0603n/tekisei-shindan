import { NextApiResponse, NextApiRequest } from "next/types";
import nodemailer from "nodemailer";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const name = request.body.name;
    const answers = request.body.answers;

    const sleep = (ms: number): Promise<void> =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const sendEmailToUser = async (userData: any): Promise<any> => {
      // nodemailerの設定
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "s.murai@tribe-group.jp",
          pass: "wqdp ewpg vovh auzu",
        },
      });

      // メールのオプション
      const mailOptions: nodemailer.SendMailOptions = {
        to: "s.murai@tribe-group.jp",
        from: '"トライブ株式会社 北海道支店" <saiyo-hokkaido@tribe-group.jp>',
        subject: `${name}様 エンジニア適正結果`, // メールの件名
        html: `
          <p>${name} 様</p>
          <br />
          <p>${answers}</p><br />
          <p>
          ――――――――――――――――――――<br/>
          
          `,
      };

      try {
        // メール送信処理
        const sendEmailPromise = transporter.sendMail(mailOptions);
        // 最低でも1秒の遅延
        const minimumDelay = sleep(1000);
        // メール送信が完了するのを待機し、最低でも0.2秒の遅延を確保
        await Promise.all([sendEmailPromise, minimumDelay]);

        console.log("メール送信完了:");
      } catch (error) {
        console.error("メールの送信エラー:", error);
      }
    };

    const data = await sendEmailToUser(request.body);
    return response
      .status(200)
      .json({ message: "正常に処理が完了しました。", data: data });
  } catch (error) {
    console.error("エラーが発生しました:", error);
    return response
      .status(500)
      .json({ error: "データを取得できませんでした。" });
  }
}
