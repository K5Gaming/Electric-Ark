import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio

Client = discord.Client()
bot_prefix= "!!"
client = commands.Bot(command_prefix=bot_prefix)

@client.event
async def on_ready():
    print("Bot Online!")
    print("Name: {}".format(client.user.name))
    print("ID: {}".format(client.user.id))

@client.command(pass_context=True)
async def ping(ctx):
    await client.say("Pong!")
async def Abberation(ctx):
    await client.say("https://arkservers.net/server/192.154.224.134:27076")
async def Ragnarock(cxt):
	await client.say("https://arkservers.net/server/192.154.224.134:27026")

client.login('MzkyNjk1MjE5NzY3NzM4Mzg4.DRrXRg.7kjjZSsM3RQHQ6vd1zjsVavsO4k')
