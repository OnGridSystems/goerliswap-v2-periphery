module.exports = async function({ getNamedAccounts, deployments }) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  token = await deploy('WETH9', {
    from: deployer,
    log: true,
    skipIfAlreadyDeployed: true
  })

  console.log('WETH9 address:', token.address)
}

module.exports.tags = ['WETH9']
