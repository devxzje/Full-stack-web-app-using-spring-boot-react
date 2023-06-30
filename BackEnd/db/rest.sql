create database rest_api_test

use rest_api_test

CREATE TABLE player(
	id			BIGINT	IDENTITY(1,1) PRIMARY KEY,
    player_name		NVARCHAR(50),
	number		BIGINT,
	club		NVARCHAR(50),
)
GO

select * from player