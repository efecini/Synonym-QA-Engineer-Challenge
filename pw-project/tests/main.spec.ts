import { test } from '@playwright/test'

test('User can create a channel', async ({ page }) => {
  await page.goto('https://widget.synonym.to/')
  const remoteBalance = await page.locator('#remote-balance')
  await remoteBalance.fill('105000')

  const spendingBalance = await page.locator('#local-balance')
  await spendingBalance.fill('1000')

  const channelExpiry = await page.locator('#channel-expiry')
  await channelExpiry.fill('5')

  const privateChannelButton = await page.locator('.custom-checkbox ')
  await privateChannelButton.click()

  const createChannelButton = await page.locator('.custom-checkbox-container')
  await createChannelButton.click()

  const termsOfServicesButton = await page.locator('.custom-checkbox ')
  await termsOfServicesButton.click()

  const payNowButton = await page.locator('.btn-primary')
  await payNowButton.click()
  //TBC
})

test('User can pay for a channel', async ({ page }) => {
  //TBC
  /*
  Steps:
  1. go to the main view.
  2. add receiving capacity
  3. add spending capacity
  4. add the week information
  5. click private channel button
  6. check the information in the review channel page.
  7. Click terms of services radio button
  8. click pay now button.
  9. Copy invoice and make the payments(BE functionality needed)
  10. Wait for some time and check that channel is opened
  */
})

test('User can go to the My orders page and pay for a channel that is waiting for payment', async ({
  page,
}) => {
  //TBC
})

test('User can go to the my orders page and check for all his/her channels', async ({
  page,
}) => {
  //TBC
})

test('User can change the preferred currency ', async ({ page }) => {
  //TBC
})

test('User can change the preferred currency ', async ({ page }) => {
  //TBC
})

test('User cannot have an open channel after the channel expiry date', async ({
  page,
}) => {
  //TBC
})
