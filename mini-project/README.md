npx sequelize-cli model:generate --name student --attributes name:string,nim:integer,kelompokId:integer
npx sequelize-cli model:generate --name kelompok --attributes kelompokNumber:integer,kelompokName:string
npx sequelize-cli model:generate --name practicalTool --attributes name:string,ukuran:string,jumlah:integer
npx sequelize-cli model:generate --name additionalTool --attributes name:string,ukuran:string,jumlah:integer,harga:integer

npx sequelize-cli model:generate --name kelompokTool --attributes additionalToolId:integer,kelompokId:integer,practicalToolId:integer
