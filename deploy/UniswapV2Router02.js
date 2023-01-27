module.exports = async function({ getNamedAccounts, deployments }) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  const factoryAddress = '0x46A6788C2fB723eFCf121898706141438C386E82'
  const weth = (await deployments.get('WETH9')).address

  token = await deploy('UniswapV2Router02', {
    from: deployer,
    log: true,
    args: [factoryAddress, weth],
    skipIfAlreadyDeployed: true
  })

  console.log('UniswapV2Router02 address:', token.address)
}

module.exports.tags = ['UniswapV2Router02']
module.exports.dependencies = ['WETH9']
