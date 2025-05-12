import { Component } from '@angular/core';
import { ActivitiesService } from '../../_services/activities.service';

@Component({
  selector: 'app-bus-ticket',
  templateUrl: './bus-ticket.component.html',
  styleUrl: './bus-ticket.component.css'
})
export class BusTicketComponent {
  
  zones: string[] = [];
  quantity: number=0;
  purchasedTicket: any;
  errorMessage: string | null = null;
  zone1Selected: boolean = false;
  zone2Selected: boolean = false;
  zone3Selected: boolean = false;
  cardserrorMessage: string | null = null;

  cardsquantity: number = 0;
  purchasedCard: any;

  showBusTicketsSection: boolean = true;
  showBusCardsSection: boolean = false;

  constructor(private busTicketService: ActivitiesService) { }

  updateZones(zone: string): void {
    this.zones = [zone];
  }

  purchaseTickets(): void {
    if (this.zones.length === 0 || !this.quantity) {
      this.errorMessage = 'Please select zones and enter quantity.';
      return;
    }
    this.errorMessage = null;
    this.busTicketService.purchaseBusTickets(this.zones, this.quantity)
      .subscribe(
        (response) => {
          this.purchasedTicket = response.busTicket;
        },
        (error) => {
          console.error('Error purchasing bus tickets:', error);
          this.errorMessage = 'Failed to purchase bus tickets. Please try again later.';
        }
      );
  }


  purchaseCard(): void {
    if (!this.cardsquantity) {
      this.cardserrorMessage = 'Please enter cards quantity.';
      return;
    }
    this.errorMessage = null;
    this.busTicketService.purchaseBusCards(this.cardsquantity)
      .subscribe(
        (response) => {
          this.purchasedCard = response.busCard;
          console.log(response);
        },
        (error) => {
          console.error('Error purchasing bus card:', error);
          this.cardserrorMessage = 'Failed to purchase bus card. Please try again later.';
        }
      );
  }

  showBusTickets() {
    this.showBusTicketsSection = true;
    this.showBusCardsSection = false;
  }

  showBusCards() {
    this.showBusTicketsSection = false;
    this.showBusCardsSection = true;
  }

}
