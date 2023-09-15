import { google } from "googleapis";

export async function getGoogleSheetsData(range: string) {
  const auth = await google.auth.getClient({
    projectId: "your-project-id",
    credentials: {},
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: "",
    range: range,
  });

  return data.data.values;
}