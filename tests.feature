Feature: Testing Epam web-site


Background: 
    Given I opened Epam web-site

# 1
Scenario: Select language
	Given I click Language select button	
	When I select next region and language:
	     |Ukraine|English|
	Then I should be redirected to Ukrainian region English web-page
# 2
Scenario: Find some info about company 
    Given I am on the main page
  When Click "How we do it" button
  Then I expect to see some information about company processes
# 3
Scenario: Display office location
	Given I am on the main page
	* I scroll down the page
	* I select Our offices Americas
	* I select Canada
	* I see list of cities in Canada with EPAM offices
	* I select Ottawa city
	When I click "MAP" link
	Then My browser should open new tab with google maps
	And mark the adress of office in Minsk
# 4
Scenario: Window size
	Given I am on the main page
	And I switch my browser from full-screen to the window mode
	When I manually dicrease size of window
	Then All text and sections on the site should adjust for the size of the window
	And All menu options should be compressed in one "MENU +" button with the drop submenu
# 5
Scenario: Apply for job
    Given I am on the page with the list of Java vacancies
	When I click "APPLY" button
	Then I should see an information about the job
# 6
Scenario: Find Job Offers
	Given I am on the main page
	* I click "Find your dream job" button
	When I select Location Kiev
	Then I should see all job offers in Kiev

# 7
Scenario: Connection with Instagram
	Given I am on the main page
	And I scroll to the bottom 
	When I click Instagram button
	Then Browser should redirect me to the EPAM Instagram web page in new tab
# 8 
Scenario: Using Search tool
  Given I am on the main page
  * I click on the magnifier button
  * Serch menu drops down
  * I type in "js" in search field
  When I click "FIND" button
  Then I should see all results of search related to the "js"




