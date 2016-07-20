class Book {
	String pub = "Qinghua Public";
	public String title;
	public double price;
	public Book(String title, double price) {
		this.title = title;
		this.price = price;
	}
	public String getInfo() {
		return this.title + this.price;
	}
}
public class TestDemo {
	public static void main(String[] args) {
		Book ba = new Book("Java",10.2);
		Book bb = new Book("Android",11.2);
		Book bc = new Book("Oracle",12.2);
		System.out.println(ba.getInfo());
		System.out.println(bb.getInfo());
		System.out.println(bc.getInfo());
	}
}