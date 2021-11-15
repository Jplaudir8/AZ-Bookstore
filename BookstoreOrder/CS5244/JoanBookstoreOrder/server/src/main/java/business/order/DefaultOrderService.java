package business.order;

import api.ApiException;
import business.book.Book;
import business.book.BookDao;
import business.cart.ShoppingCart;
import business.customer.CustomerForm;

import java.time.DateTimeException;
import java.time.YearMonth;
import java.util.Date;

public class DefaultOrderService implements OrderService {

	private BookDao bookDao;

	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
	}

	@Override
	public OrderDetails getOrderDetails(long orderId) {
		// NOTE: THIS METHOD PROVIDED NEXT PROJECT
		return null;
	}

	@Override
    public long placeOrder(CustomerForm customerForm, ShoppingCart cart) {

		validateCustomer(customerForm);
		validateCart(cart);

		// NOTE: MORE CODE PROVIDED NEXT PROJECT

		return -1;
	}


	private void validateCustomer(CustomerForm customerForm) {

		if (!nameIsValid(customerForm.getName())) {
			throw new ApiException.InvalidParameter("Invalid name field");
		}

		if (!phoneIsValid(customerForm.getPhone())){
			throw new ApiException.InvalidParameter("Invalid phone field");
		}

		if (!addressIsValid(customerForm.getAddress())){
			throw new ApiException.InvalidParameter("Invalid address field");
		}

		if (!emailIsValid(customerForm.getEmail())){
			throw new ApiException.InvalidParameter("Invalid e-mail field");
		}

		if (!ccNumberIsValid(customerForm.getCcNumber())) {
			throw new ApiException.InvalidParameter("Invalid credit card number field");
		}

		if (expiryDateIsInvalid(customerForm.getCcExpiryMonth(), customerForm.getCcExpiryYear())) {
			throw new ApiException.InvalidParameter("Invalid expiry date");
		}
	}

	private boolean nameIsValid(String name) {
		if (name == null) return false;
		if (name.equals("")) return false;
		if (name.length() < 4) return false;
		if (name.length() > 45) return false;
		return true;
	}

	private boolean phoneIsValid(String phone) {
		if (phone == null) return false;
		if (phone.equals("")) return false;
		// (703) 555-1212
		// 703-555-1212
		// 703 555 1212
		// 7035551212
		phone = phone.replaceAll(" ", "");
		phone = phone.replaceAll("-", "");
		phone = phone.replaceAll("\\(", "");
		phone = phone.replaceAll("\\)","");

		// should have a number (no letters) with exactly 10 digits
		if (!phone.matches("[\\d]+")) return false;
		if (phone.length() != 10) return false;
		return true;
	}

	private boolean addressIsValid(String address) {
		if (address == null) return false;
		if (address.equals("")) return false;
		if (address.length() < 4) return false;
		if (address.length() > 45) return false;
		return true;
	}

	private boolean emailIsValid(String email) {
		if (email == null) return false;
		email = email.replaceAll(" ", "");
		if (!email.contains("@")) return false;
		if (email.endsWith(".")) return false;
		return true;
	}

	private boolean ccNumberIsValid(String ccNumber) {
		if (ccNumber == null) return false;
		if (!ccNumber.matches("[\\d]+")) return false;
		if (ccNumber.length() < 14) return false;
		if (ccNumber.length() > 16) return false;
		return true;
	}

	private boolean expiryDateIsInvalid(String ccExpiryMonth, String ccExpiryYear) {
		if (ccExpiryMonth == null) return true;
		if (!ccExpiryMonth.matches("[\\d]+")) return true;
		if (Integer.parseInt(ccExpiryMonth) < 1 || Integer.parseInt(ccExpiryMonth) > 12) return true;
		if (ccExpiryYear == null) return true;
		if (!ccExpiryYear.matches("[\\d]+")) return true;
		if (ccExpiryYear.length() != 4) return true;
		YearMonth expiryYearMonth = YearMonth.of(Integer.parseInt(ccExpiryYear), Integer.parseInt(ccExpiryMonth));
		if (expiryYearMonth.compareTo(YearMonth.now()) < 0) return true;
		return false;

	}

	private void validateCart(ShoppingCart cart) {

		if (cart.getItems().size() <= 0) {
			throw new ApiException.InvalidParameter("Cart is empty.");
		}

		cart.getItems().forEach(item-> {
			if (item.getQuantity() < 0 || item.getQuantity() > 99) {
				throw new ApiException.InvalidParameter("Invalid quantity");
			}
			Book databaseBook = bookDao.findByBookId(item.getBookId());

			if (databaseBook.getPrice() != item.getBookForm().getPrice()) {
				throw new ApiException.InvalidParameter("Cart's item price does not match price in database");
			}

			if (databaseBook.getCategoryId() != item.getBookForm().getCategoryId()) {
				throw new ApiException.InvalidParameter("Cart's item category does not match category in database");
			}
		});
	}

}
