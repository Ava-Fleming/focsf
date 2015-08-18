<?php
require_once('database.php');
require_once('utility.php');
if(!empty($_POST["maxEvents"])){
  $maxEvents = $_POST["maxEvents"];
  $selectedCategory = $_POST["selectedCategory"];
  $minStartDate = $_POST["minStartDate"];
  $selectStatement = $mysqlConnection->prepare(SelectApprovedEvents()); //SelectApprovedEvents());
  $selectStatement->bindValue(':maxEvents', $maxEvents, PDO::PARAM_INT);
  $selectStatement->bindValue(':selectedCategory', $selectedCategory, PDO::PARAM_INT);
  $selectStatement->bindValue(':minStartDate', $minStartDate, PDO::PARAM_INT);
  /*Pull All requested in the stored procedure. */
  $selectStatement->execute();
  echo json_encode($selectStatement->fetchAll(PDO::FETCH_ASSOC));;
}

/*
STORED PROCEDURE:
SELECT
	Event_Info_Core.EventTitle,
    Event_Info_Core.EventDescription,

    Coordinators.CoordinatorName,
    Coordinators.CoordinatorPhone,
    Coordinators.CoordinatorEmail,

    Addresses.Address,
    X(Addresses.LatLong) As Latitude,
    Y(Addresses.LatLong) As Longitude,

    Event_Info.StartDate,
    Event_Info.EndDate,
    Event_Info.ExtraNotes

FROM
	Event_Info

    Join Event_Info_Core
    on Event_Info_Core.ID = Event_Info.EventInfoID

    Join Coordinators
    On Coordinators.ID = Event_Info.CoordinatorID

    Join Addresses
    On Addresses.ID = Event_Info.AddressID
where
	Event_Info.StartDate > IF(minStartDate <> '',minStartDate, NOW())
    AND
    Addresses.Category LIKE IF(selectedCategory <> '', selectedCategory, '%')
    AND
    Event_Info.Status = 1

Limit
	maxEvents
*/
