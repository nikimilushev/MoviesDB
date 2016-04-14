CREATE DATABASE Movies;
GO 

USE Movies;
GO

CREATE TABLE [dbo].[Movie] (
    [Id]          INT            IDENTITY (1, 1) NOT NULL PRIMARY KEY,
    [Title]       NVARCHAR (200) NOT NULL,
    [Director]    NVARCHAR (100) NOT NULL,
    [ReleaseDate] DATE           NOT NULL
);

GO

